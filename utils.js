function generateProductLink(product) {
  return `${product.id}: <a href="/products?id=${product.id}" data-cy="product-link-${product.id}">${product.name}</a>`;
}

function generateSingleProductData(product) {
  return (
    product.id +
    ': ' +
    product.name +
    '<br />' +
    product.description +
    '<br ><a href="/products" data-cy=products-link>Back to products page</a>'
  );
}
module.exports = {
  generateSingleProductData,
  generateProductLink,
};
