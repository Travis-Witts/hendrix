const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const app = express();

// socket io requirements
const http = require('http').Server(app);
const io = require('socket.io')(http);
const { generateMessage } = require('./utils/message');

const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// function containing all the required functions to be started when the server is connected
io.on('connection', (socket) => {

  // generating a message so the user is welcomed to the chatroom when connected 
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chatroom'));

  // generating a message to let users know that a new user has joined the chat room
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  // generating a message as an object using a helper function 
  socket.on('createMessage', (msg, callback) => {
    console.log("createMessage", msg);
    io.emit('newMessage', generateMessage(msg.from, msg.text));
    callback();
  });

  // confirming disconnection 
  socket.on('disconnect', () => {
    console.log("user has disconnected");
  });
});

// starting the server
sequelize.sync({ force: false }).then(() => {
  http.listen(PORT, () => {
    console.log('listening on: ' + PORT);
  });
});