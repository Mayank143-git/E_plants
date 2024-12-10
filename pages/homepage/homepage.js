// Load Navbar
debugger
document.addEventListener("DOMContentLoaded", function () {
  fetch('../../components/Navbar/Navbar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar-container').innerHTML = data;
        //   document.getElementById('navbar-container').innerHTML = Date();
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

// Mover 
// document.addEventListener("DOMContentLoaded", function () {
//     fetch('../../components/Mover/Mover.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('mover-container').innerHTML = data;
//             console.log("hi")
//         })
//         .catch(error => console.error('Error loading slider:', error));
//         console.log("hi fi")

//   });
// Mover 
document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/Mover/Mover.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('mover-container').innerHTML = data;
            console.log("hi");

            // Dynamically add the move.js script
            const script = document.createElement('script');
            script.src = '../../components/Mover/move.js';
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error loading Mover:', error));
        console.log("hi fi")
});


  // footer Slider
document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading slider:', error));
  });