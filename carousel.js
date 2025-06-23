document.addEventListener('DOMContentLoaded', () => {
  console.log('Carousel script loaded');
  const carouselContent = document.getElementById('carousel-content');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let currentIndex = 0;
  const slides = carouselContent ? carouselContent.children : [];
  const totalSlides = slides.length;

  // Log element availability
  console.log('carouselContent:', carouselContent);
  console.log('prevBtn:', prevBtn);
  console.log('nextBtn:', nextBtn);
  console.log('totalSlides:', totalSlides);

  if (!carouselContent || !prevBtn || !nextBtn || totalSlides === 0) {
    console.error('Carousel elements not found or no slides available');
    return;
  }

  function showSlide(index) {
    console.log('showSlide called with index:', index);
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    console.log('Setting transform to:', `translateX(-${currentIndex * 100}%)`);
    carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Click handlers
  prevBtn.addEventListener('click', () => {
    console.log('Previous button clicked');
    showSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    console.log('Next button clicked');
    showSlide(currentIndex + 1);
  });

  // Auto-slide every 5 seconds
  let autoSlide = setInterval(() => {
    console.log('Auto-slide triggered');
    showSlide(currentIndex + 1);
  }, 5000);

  // Pause auto-slide on hover
  const carouselContainer = document.getElementById('reviews-carousel');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
      console.log('Mouse entered carousel');
      clearInterval(autoSlide);
    });
    carouselContainer.addEventListener('mouseleave', () => {
      console.log('Mouse left carousel');
      autoSlide = setInterval(() => {
        showSlide(currentIndex + 1);
      }, 5000);
    });
  } else {
    console.error('Carousel container not found');
  }
});