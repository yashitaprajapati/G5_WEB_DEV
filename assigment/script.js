console.log("Fetching Data ");

function showProducts(products) {
  const container = document.getElementById('products-container');

  products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${product.thumbnail}" />
      <h3>${product.title}</h3>
      <p>Price:${product.price}</p>
      <p>${product.description}</p>
    `;

    container.appendChild(card);
      });
}
  function fetchProducts() {
  fetch("https://dummyjson.com/products?limit=100")
  .then((response) => response.json())
  .then((data) => {
      console.log("Products Fetched");
      showProducts(data.products);
    })
  }
fetchProducts();