let username;
let connectedUser;

const connection = new WebSocket('ws://localhost:9090');

connection.onopen = () => {
  console.log('Connected to the signaling server');
};

connection.onmessage = (message) => {
  console.log(`Got message: ${message.data}`);
  const data = JSON.parse(message.data);

  switch (data.type) {
    case 'login':
      handleLogin(data.success);
      break;

    case 'offer':
      handleOffer(data.offer, data.name);
      break;
    case 'answer':
      handleAnswer(data.answer);
      break;

    case 'candidate':
      handleCandidate(data.candidate);
      break;

    case 'leave':
      handleLeave();
      break;

    default:
      console.log(data.message);
      break;
  }
};

connection.onerror = (err) => console.log(`Got error: ${err}`);

function send(message) {
  if (connectedUser) {
    message.name = connectedUser;
    connection.send(JSON.stringify(message));
  }
}

const loginPage = document.querySelector('#loginPage');
const usernameInput = document.querySelector('#usernameInput');
const loginBtn = document.querySelector('#loginBtn');

const callPage = document.querySelector('#callPage');
const callToUsernameInput = document.querySelector('#callToUsernameInput');
const callBtn = document.querySelector('#callBtn');

const hangUpBtn = document.querySelector('#hangUpBtn');

const localAudio = document.querySelector('#localAudio');
const remoteAudio = document.querySelector('#remoteAudio');

callPage.style.display = 'none';

let yourConnection;
let stream;

// Login when the user clicks the button
loginBtn.addEventListener('click', function (event) {
  username = usernameInput.value;

  if (name.length > 0) {
    send({
      type: 'login',
      name: name,
    });
  }
});

function handleLogin(success) {
  if (success === false) {
    alert('Ooops...try a different username');
    return;
  }
  loginPage.style.display = 'none';
  callPage.style.display = 'block';

  //**********************
  //Starting a peer connection
  //**********************

  navigator.getUserMedia({ video: false, audio: true }, (s) => {
    stream = s;

    localAudio.src = window.URL.createObjectURL(stream);

    const configuration = {
      iceServers: [{ url: 'stun:stun2.1.google.com:19302' }],
    };

    yourConnection = new webkitRTCPeerConnection(configuration);

    stream
      .getTracks()
      .forEach((track) => yourConnection.addTrack(track, stream));

    stream.onaddtrack = (e) => {
      remoteAudio.src = window.URL.createObjectURL(e.stream);
    };

    if()

  });
}
