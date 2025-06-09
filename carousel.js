document.addEventListener('DOMContentLoaded', () => {
  const carouselContent = document.getElementById('carousel-content');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let currentIndex = 0;
  const slides = carouselContent.children;
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;
    carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

  // Auto-slide every 5 seconds
  setInterval(() => showSlide(currentIndex + 1), 5000);
});