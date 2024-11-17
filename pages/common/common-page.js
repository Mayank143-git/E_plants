const dataPaths = {
    fruits: '../../Data/fruit.json',
    vegetables: '../../Data/vegetable.json',
    fertilizers: '../../Data/fertilizers.json',
    seasons: '../../Data/season.json',
    indoor: '../../Data/indoor.json',
    outdoor: '../../Data/outdoor.json',
};

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

if (category && dataPaths[category]) {
    fetchDataAndDisplay(category);
} else {
    document.getElementById('category-content').innerHTML = '<p>Category not found.</p>';
}

async function fetchDataAndDisplay(category) {
    try {
        const response = await fetch(dataPaths[category]);
        const data = await response.json();

        // Set up the heading
        let content = `<h2 style="text-align: center; margin-bottom: 20px;">${category.charAt(0).toUpperCase() + category.slice(1)} Data</h2>`;

        // Add a line break between heading and cards
        content += `<br>`; // This adds a line break

       // Add a line break between heading and cards
         content += `<br>`; // This adds a line break

        // Add the cards
        data.forEach(item => {
            // Ensure all necessary fields exist and are non-empty
            if (item.image && item.name && item.description && item.price) {
                content += `
                    <div class="card">
                        <img src="${item.image}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p>Price: $${item.price}</p>
                        <button onclick="window.location.href='../../pages/order/order.html?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&description=${encodeURIComponent(item.description)}&price=${encodeURIComponent(item.price)}'">Order Now</button>
                    </div>
                `;
            }
        });

        // Add content to the page
        document.getElementById('category-content').innerHTML = content;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('category-content').innerHTML = '<p>Error loading data.</p>';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/Navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
  });