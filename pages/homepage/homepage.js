// Load Navbar
document.addEventListener("DOMContentLoaded", function () {
  fetch('../../components/Navbar/navbar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading navbar:', error));
});

// Load Hero
document.addEventListener("DOMContentLoaded", function () {
  fetch('../../components/hero/hero.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('hero-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading hero:', error));
});

// Load Slider
document.addEventListener("DOMContentLoaded", function () {
  fetch('../../components/Slider/Slider.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('slider-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading slider:', error));
});

// Mover Slider
document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/Mover/Mover.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('mover-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading slider:', error));
  });

  // Mover Slider
document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading slider:', error));
  });