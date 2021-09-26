navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    const localVideo = document.getElementById('local-video');
    console.log(localVideo);

    if (localVideo) {
      console.log('srcObject' in localVideo);
      localVideo.srcObject = stream;
    }
  })
  .catch(console.error);
