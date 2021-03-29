// importing socket io
let socket = io();

// getting attributes from chat form
const messages = document.getElementById('message-container');
const form = document.getElementById('send-container');
const input = document.getElementById('message-input');

// confirming server connection
socket.on('connect', function () {
    console.log("Connected to server");
});

// confirming server disconnection
socket.on('disconnect', function () {
    console.log("disconnected from server");
});

// creating a new message and appending to the screen
socket.on('newMessage', function (msg) {
    const formatTime = moment(msg.createdAt).format('LT');
    console.log("newMessage:", msg);
    let item = document.createElement('li');
    item.innerText = `${msg.from} ${formatTime}: ${msg.text}`
    messages.appendChild(item);
    console.log(item);
    window.scrollTo(0, document.body.scrollHeight);
});

// getting the user name
const chatName = document.getElementById('message-input').getAttribute('key');

// creating the message when user clicks the send button
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(chatName);
    socket.emit('createMessage', {
        from: chatName,
        text: input.value
    }, function () {

    });
});