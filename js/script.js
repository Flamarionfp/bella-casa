async function loadProducts() {
  const response = await fetch("./products.json");
  const products = await response.json();
  return products;
}

function formatMoney(value) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

function renderProductsHTML(imageThumbnailUrl, displayName, price) {
  const productsContainer = document.querySelector("#products-container");
  const productsHTML = `
    <div class="product-container">
    <label class="product-name-label-mobile" id="product-name-label">${displayName}</label>
    <img class="product-image" id="product-image" src=${imageThumbnailUrl} alt="Imagem do produto ${displayName}" />
    <div class="product-info">
      <div class="product-name-wrapper">
        <label class="product-name-label" id="product-name-label">${displayName}</label>
        <img class="fav-icon-outline" src="./public/assets/images/fav-icon-outline.png"
          alt="Favoritar produto" /> 
      </div>
      <div class="price-container-mobile">
        <p class="price" id="price">${formatMoney(price)}</p>
        <img class="fav-icon-outline fav-icon-outline-mobile" src="./public/assets/images/fav-icon-outline.png"
        alt="Favoritar produto" />
      </div>
    </div>
  `;
  productsContainer.innerHTML += productsHTML;
}

function renderProducts(products) {
  products.forEach(({ imageThumbnailUrl, displayName, price }) => {
    renderProductsHTML(imageThumbnailUrl, displayName, price);
  });
}

// function handlefavoriteProduct(products, productId) {
//   let desiredProductIndex = products.findIndex(
//     (product) => product.id === productId
//   );
//   products[desiredProductIndex].favorite =
//     !products[desiredProductIndex].favorite;
// }

async function main() {
  let products = await loadProducts();
  renderProducts(products);
}

main();
