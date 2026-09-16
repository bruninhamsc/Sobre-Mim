hljs.highlightAll();

const cardWrapper = document.querySelector('.card-wrapper');
const content = document.querySelector('.content');
const audio = document.getElementById('bg-audio');

let confettiInterval;

cardWrapper.addEventListener('click', () => {
  const isActive = cardWrapper.classList.toggle('active');
  content.classList.toggle('active');

  if (isActive) {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }

    confettiInterval = setInterval(() => {
      confetti({
        particleCount: 30,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ffcce6', '#ff4d6d', '#ff85a1', '#ffffff']
      });
    }, 350);

  } else {
    if (audio) {
      audio.pause();
    }
    clearInterval(confettiInterval);
  }
}