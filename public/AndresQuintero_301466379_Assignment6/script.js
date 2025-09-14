document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("products");

  fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
          const selectedProducts = data.slice(0, 5);

          selectedProducts.forEach(product => {
              const productCard = document.createElement("div");
              productCard.className = "product";

              productCard.innerHTML = `
                  <img src="${product.image}" alt="${product.title}" />
                  <h2>${product.title}</h2>
                  <p class="price">$${product.price}</p>
                  <p>${product.description}</p>
                  <p><strong>Category:</strong> ${product.category}</p>
              `;

              productContainer.appendChild(productCard);
          });
      })
      .catch(error => {
          productContainer.innerHTML = "<p>Failed to load products. Please try again later.</p>";
          console.error("Error fetching products:", error);
      });
});
