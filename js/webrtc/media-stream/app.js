const btn = document.querySelector('#btn');
const video = document.querySelector('#video');

async function handleButtonClick() {
  try {
    const constraints = { video: true };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener('click', handleButtonClick);
