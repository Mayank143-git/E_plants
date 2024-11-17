// form.js: Handles form submission and redirects

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Redirect to finalorder.html after form submission
    window.location.href = "../finalorder/finalorder.html";
});
