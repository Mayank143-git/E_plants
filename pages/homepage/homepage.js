document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/Navbar/navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading navbar:', error));
  });

  document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/hero/hero.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('hero-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading navbar:', error));
  });

  document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/Slider/Slider.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('slider-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading navbar:', error));
  });
  