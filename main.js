const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');

let currentSlide = 0;

function goToSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  }
  const translateX = -currentSlide * 100;
  slider.style.transform = `translateX(${translateX}%)`;
}

prevBtn.addEventListener('click', () => {
  currentSlide--;
  goToSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide++;
  goToSlide(currentSlide);
});

// =====================================================
