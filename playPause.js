const getId = (id) => document.getElementById(id);
const video = getId('video');
const videoStatePicture = getId('videoImage');
const statePictures = {
  pause: './img/pause-button.png',
  play: './img/play-button.png'
};

function toggleVideoState() {
  if (video.paused) {
    video.play();
    videoStatePicture.src = statePictures.pause;
  } else {
    video.pause();
    videoStatePicture.src = statePictures.play;
  }
}

const playPause = {
  init: () => {
    getId('toggleStateButton').onclick = () => {
      toggleVideoState();
    }
  }
}

export default playPause;
