let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[n].style.display = 'block';
}

function nextSlide() {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  showSlide(slideIndex);
}

function goBack() {
  window.history.back();
}
