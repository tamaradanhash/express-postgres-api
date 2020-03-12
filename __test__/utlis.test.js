// First step: import or require the unit that you want to test
const { generateProductLink, generateSingleProductData } = require('../utils');
// Second: write test function, the first parameter is a string that descripes the tested unit functionality and the second parameter is the actual test function
test('generates a product link', () => {
  // Because the {generateProductLink} function accepts a product object in it parameters we first created one
  const product = {
    id: 1,
    name: 'table',
    description: 'nice table',
    price: '2424',
  };
  // The last step is to write this function wich compare our function  return value with the expected output.
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
