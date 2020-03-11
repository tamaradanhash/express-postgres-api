const { generateProductLink, generateSingleProductData } = require('../utils');

test('generates a product link', () => {
  const product = {
    id: 1,
    name: 'table',
    description: 'nice table',
    price: '2424',
  };

  expect(generateProductLink(product)).toBe(
    `1: <a href="/products?id=1" data-cy="product-link-1">table</a>`,
  );
});

test('generates the single product information', () => {
  const product = {
    id: 3,
    name: 'chair',
    description: 'nice chair',
    price: '2424',
  };

  expect(generateSingleProductData(product)).toMatchSnapshot();
});
