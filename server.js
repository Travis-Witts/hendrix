const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);
const { generateMessage } = require('./utils/message');

http.listen(3000, () => {
  console.log('listening on *:3000');
});

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

io.on('connection', (socket) => {

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chatroom'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (msg, callback) => {
    console.log("createMessage", msg);
    io.emit('newMessage', generateMessage(msg.from, msg.text));
    callback();
  });

  socket.on('disconnect', () => {
    console.log("user has disconnected");
  });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});