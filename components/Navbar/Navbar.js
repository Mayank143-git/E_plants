const navbarToggle = document.getElementById('navbarToggle');
const navbarItems = document.getElementById('navbarItems');
debugger

navbarToggle.addEventListener('click', () => {
  navbarItems.classList.toggle('show');  // Toggles the 'show' class on navbarItems
});
