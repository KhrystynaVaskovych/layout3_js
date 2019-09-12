const getId = (id) => document.getElementById(id);

function toggle() {
    const video = getId('video');
    if (video.paused) {
      video.play();
      getId('videoImage').src = './img/pause-button.png';
    } else {
      video.pause();
      getId('videoImage').src = './img/play-button.png';
    }
  }

const playPause = {
    init: () => {
        getId('toggleState').onclick = () => {
            toggle();
        }
    }
}

export default playPause;


