document.addEventListener("DOMContentLoaded", function () {
  const carouselList = document.querySelector(".about__carousel-list");
  const totalSlides = document.querySelectorAll(
    ".about__carousel-list li"
  ).length;
  const slideWidth = 100;
  let currentIndex = 0;

  function showSlide(index) {
    const adjustedIndex = (index + totalSlides) % totalSlides;
    const newTransformValue = -adjustedIndex * slideWidth + "%";
    carouselList.style.transform = "translateX(" + newTransformValue + ")";
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);

  const prevButton = document.querySelector(
    ".about__carousel-container__btn--prev"
  );

  prevButton.addEventListener("click", prevSlide);
});
