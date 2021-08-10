console.log('Client B');

const offer = {
  type: 'offer',
  sdp: 'v=0\r\no=- 8012609211785359050 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:Chbi\r\na=ice-pwd:VKSJcd63tBBGmwvoXAn5AqC4\r\na=ice-options:trickle\r\na=fingerprint:sha-256 EC:65:EA:22:90:E5:D0:10:2F:1E:DF:3D:DF:1E:4D:5B:94:97:71:BC:5F:D5:8F:85:D4:05:18:B9:32:E6:F0:47\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n',
};

const remoteConnection = new RTCPeerConnection();

remoteConnection.onicecandidate = () =>
  console.log(
    `New ICE candidate! Reprinting SDP: ${JSON.stringify(
      remoteConnection.localDescription,
    )}`,
  );

const dataConnection = (remoteConnection.ondatachannel = (e) => {
  remoteConnection.dataChannel = e.dataChannel;
  remoteConnection.dataChannel.onmessage = (e) =>
    console.log(`New Message: ${e.data}`);
  remoteConnection.dataChannel.onopen = () => console.log('Connection opened');
});

remoteConnection
  .setRemoteDescription(offer)
  .then(() => console.log('Remote description set'));

remoteConnection
  .createAnswer()
  .then((ans) =>
    remoteConnection
      .setLocalDescription(ans)
      .then(() => console.log('Ans created')),
  );
