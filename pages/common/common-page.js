const dataPaths = {
    fruits: '../../Data/fruit.json',
    vegetables: '../../Data/vegetable.json',
    fertilizers: '../../Data/fertilizers.json',
    seasons: '../../Data/season.json'
};

const urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams);
const category = urlParams.get('category');
// console.log(category);

if (category && dataPaths[category]) {
    fetchDataAndDisplay(category);
} else {
    document.getElementById('category-content').innerHTML = '<p>Category not found.</p>';
}

async function fetchDataAndDisplay(category) {
    try {
        const response = await fetch(dataPaths[category]);
        const data = await response.json();

        let content = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)} Data</h2>`;
        console.log(content);

        data.forEach(item => {
            // Modified part: passing all necessary details in the URL as query parameters
            content += `
                <div class="card">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: $${item.price}</p>
                    <button onclick="window.location.href='../../pages/order/order.html?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}&description=${encodeURIComponent(item.description)}&price=${encodeURIComponent(item.price)}'">Order Now</button>
                </div>
            `;
        });

        document.getElementById('category-content').innerHTML = content;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('category-content').innerHTML = '<p>Error loading data.</p>';
    }
}
