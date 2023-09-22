// Получаем необходимые элементы
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');

// Инициализируем индекс текущего слайда
let currentSlide = 0;

// Функция для перемещения слайдов
function goToSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  }
  const translateX = -currentSlide * 100;
  slider.style.transform = `translateX(${translateX}%)`;
}

// Обработчики событий для кнопок навигации
prevBtn.addEventListener('click', () => {
  currentSlide--;
  goToSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide++;
  goToSlide(currentSlide);
});

// Автоматическое переключение слайдов (можете настроить по своему усмотрению)
// function autoSlide() {
//   currentSlide++;
//   goToSlide(currentSlide);
// }

// // Запуск автоматической прокрутки
// const autoSlideInterval = setInterval(autoSlide, 1000);

// // Остановка автоматической прокрутки при наведении курсора на слайдер
// sliderContainer.addEventListener('mouseenter', () => {
//   clearInterval(autoSlideInterval);
// });

// // Возобновление автоматической прокрутки при уходе курсора с слайдера
// sliderContainer.addEventListener('mouseleave', () => {
//   autoSlideInterval = setInterval(autoSlide, 1000);
// });