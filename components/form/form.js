// Get modal and button elements
var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

// Open the modal when the button is clicked
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the close button (X) is clicked
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
