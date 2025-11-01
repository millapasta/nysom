document.addEventListener("DOMContentLoaded", function() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const images = Array.from(track.children);
    const nextButton = carousel.querySelector('.next');
    const prevButton = carousel.querySelector('.prev');
    let index = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener('click', (event) => {
      event.preventDefault();
      index = (index + 1) % images.length;
      updateCarousel();
    });

    prevButton.addEventListener('click', (event) => {
      event.preventDefault();
      index = (index - 1 + images.length) % images.length;
      updateCarousel();
    });
  });
});
