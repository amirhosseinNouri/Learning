console.log('Client A');

const localConnection = new RTCPeerConnection();

const dataChannel = localConnection.createDataChannel('Channel');

dataChannel.onmessage = (e) => console.log(`New Message: ${e.data}`);
dataChannel.onopen = () => console.log('Connection opened');

localConnection.onicecandidate = () =>
  console.log(
    `New ICE candidate! Reprinting SDP: ${JSON.stringify(
      localConnection.localDescription,
    )}`,
  );

localConnection
  .createOffer()
  .then((offer) => localConnection.setLocalDescription(offer))
  .then(console.log('Set successfully'));

const ans = {
  type: 'answer',
  sdp: 'v=0\r\no=- 1174609662474816556 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:DG11\r\na=ice-pwd:mRrO0WaUHKG8juaxQehhS5DD\r\na=ice-options:trickle\r\na=fingerprint:sha-256 BE:DB:B4:EC:03:69:7D:AE:C3:C6:25:9A:97:20:06:69:8D:A2:24:E4:85:E9:AF:71:EF:B1:94:71:9D:88:AA:CA\r\na=setup:active\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n',
};

localConnection.setRemoteDescription(ans);
