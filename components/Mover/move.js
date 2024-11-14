// Slider.js

// Function to navigate to the common page with the selected category
function ind(category) {
  // Correct path to navigate to common-page.html
  window.location.href = `../../pages/common/common-page.html?category=${category}`;
}

// Optional: Enable smooth scrolling for the slider container
document.querySelector('.slider-container').addEventListener('wheel', (event) => {
  event.preventDefault();
  event.currentTarget.scrollBy({
    left: event.deltaY < 0 ? -100 : 100,
    behavior: 'smooth'
  });
});
