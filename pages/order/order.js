// order.js - Fetch the query parameters and display the product details

// Function to get query parameters from the URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Fetch query parameters
const name = getQueryParam('name');
const image = getQueryParam('image');
const description = getQueryParam('description');
const price = getQueryParam('price');

// Display the order details
const orderDetails = document.getElementById('order-details');

if (name && image && description && price) {
    orderDetails.innerHTML = `
        <div class="order-container">
            <img src="${image}" alt="${name}">
            <div class="order-details">
                <h3>${name}</h3>
                <p>${description}</p>
                <p class="price">Price: $${price}</p>
                <button onclick="buyNow()">Buy Now</button>
            </div>
        </div>
    `;
} else {
    orderDetails.innerHTML = '<p>Product details not found.</p>';
}

// Function for "Buy Now" button (you can extend this to implement actual buying functionality)
function buyNow() {
    alert('Thank you for your purchase!');
    // You can implement redirection or other functionality here for the actual buy process.
}


// Load Navbar
document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/Navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
  });
  