const { RTCPeerConnection, RTCSessionDescription } = window;

const peerConnection = new RTCPeerConnection();

const socket = io('http://localhost:5000');
socket.on('update-user-list', ({ users }) => {
  updateUserList(users);
});

socket.on('connection ', () => console.log('Client socket connected'));

socket.on('remove-user', ({ socketId }) => {
  const elementToRemove = document.getElementById(socketId);

  if (elementToRemove) {
    elementToRemove.remove();
  }
});

function updateUserList(socketIds) {
  const activeUserContainer = document.getElementById('active-user-container');

  socketIds.forEach((socketId) => {
    const alreadyExistingUser = document.getElementById(socketId);

    if (!alreadyExistingUser) {
      const userContainerElement = createUserItemContainer(socketId);
      activeUserContainer.appendChild(userContainerElement);
    }
  });
}

function createUserItemContainer(socketId) {
  const userContainerElement = document.createElement('div');
  const usernameElement = document.createElement('p');

  userContainerElement.setAttribute('class', 'active-user');
  userContainerElement.setAttribute('id', socketId);
  usernameElement.setAttribute('class', 'username');
  usernameElement.innerHTML = `Socket: ${socketId}`;
  userContainerElement.appendChild(usernameElement);

  userContainerElement.addEventListener('click', () => {
    unselectUsersFormList();
    userContainerElement.setAttribute(
      'class',
      'active-user active-user--selected',
    );
    const talkingWithInfo = document.getElementById('talking-with-info');
    talkingWithInfo.innerHTML = `Talking with: "Socket: ${socketId}"`;
    callUser(socketId);
  });

  return userContainerElement;
}

function unselectUsersFormList() {}

async function callUser(socketId) {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(new RTCSessionDescription(offer));

  socket.emit('call-user', {
    offer,
    to: socketId,
  });
}

navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const localVideo = document.getElementById('local-video');

    if (localVideo) {
      localVideo.srcObject = stream;
    }
  })
  .catch(console.error);
