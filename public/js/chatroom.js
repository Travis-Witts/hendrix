let socket = io();

const messages = document.getElementById('message-container');
const form = document.getElementById('send-container');
const input = document.getElementById('message-input');

socket.on('connect', function () {
    console.log("Connected to server");
});

socket.on('disconnect', function () {
    console.log("disconnected from server");
});

const chatName = document.getElementById('chatUsername').textContent;


socket.on('newMessage', function (msg) {
    const formatTime = moment(msg.createdAt).format('LT');
    console.log("newMessage:", msg);
    let item = document.createElement('li');
    item.innerText = `${msg.from} ${formatTime}: ${msg.text}`
    messages.appendChild(item);
    console.log(item);
    window.scrollTo(0, document.body.scrollHeight);
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(chatName);
    socket.emit('createMessage', {
        from: chatName,
        text: input.value
    }, function () {

    });
});


// if (input.value) {
    //     socket.emit('chat message');
    //     input.value = '';
    // }
 // input.value = '';

// socket.emit('chat message', {
//     from: "Silvia",
//     text: "hey hello"
// });

// socket.on('createMessage', function (msg) {
//     console.log("new message:", msg);
// });
