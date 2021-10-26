const ws = require('ws');

const WebSocketServer = ws.Server;

const users = {};

const wss = new WebSocketServer({ port: 9090 });

wss.on('connection', (connection) => {
  console.log('User connected.');

  connection.on('message', (message) => {
    let data = {};

    try {
      data = JSON.parse(message);
    } catch (err) {
      console.log(err);
    }

    switch (data.type) {
      case 'login': {
        const { name } = data;
        console.log(`User logged: ${name}`);

        if (users[name]) {
          sendTo(connection, {
            type: 'login',
            success: false,
          });
        } else {
          users[name] = connection;
          connection.name = name;
          sendTo(connection, { type: 'login', success: true });
        }
      }

      case 'offer': {
        const { name } = data;
        console.log(`Sending offer to: ${name}`);
        const othersPartyConnection = users[name];

        if (othersPartyConnection) {
          connection.otherName = name;
          sendTo(othersPartyConnection, {
            type: 'offer',
            offer: data.offer,
            name: connection.name,
          });
        }
      }

      case 'answer': {
        console.log(`Sending answer to: ${data.name}`);

        const othersPartyConnection = users[data.name];

        if (othersPartyConnection) {
          connection.otherName = data.name;

          sendTo(othersPartyConnection, {
            type: 'answer',
            answer: data.answer,
          });
        }
      }

      case 'candidate': {
        console.log(`Sending candidate to: ${data.name}`);
        const othersPartyConnection = users[data.name];

        if (othersPartyConnection) {
          sendTo(othersPartyConnection, {
            type: 'candidate',
            candidate: data.candidate,
          });
        }
      }

      case 'leave': {
        console.log(`Disconnection from: ${data.name}`);

        const othersPartyConnection = user[data.name];
        othersPartyConnection.otherName = null;

        if (othersPartyConnection) {
          sendTo(othersPartyConnection, { type: 'leave' });
        }
      }

      default:
        sendTo(connection, {
          type: 'error',
          message: `Command not found: ${data.type}`,
        });
    }
  });

  connection.on('close', () => {
    if (connection.name) {
      delete users[connection.name];

      if (connection.otherName) {
        console.log(`Disconnecting from: ${connection.otherName}`);
        const othersPartyConnection = users[connection.otherName];
        othersPartyConnection.otherName = null;

        if (othersPartyConnection) {
          sendTo(othersPartyConnection, { type: 'leave' });
        }
      }
    }

    delete users[connection.name];
  });

  sendTo(connection, { message: 'Hello from server.' });
});

function sendTo(connection, message) {
  connection.send(JSON.stringify(message));
}
