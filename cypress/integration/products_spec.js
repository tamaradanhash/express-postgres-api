//create test suite for the products page
describe('products page', () => {
  // Test the links to the single product page
  it('products page has links to single product pages', () => {
    // go the products page URL
    cy.visit('/products');
    //get the first link element and click on it
    cy.get('[data-cy=product-link-1]').click();

    // Should be on a new URL which includes the product page
    // the resulting URL the single product path
    cy.url().should('include', '/products?id=1');
  });
});
describe('product page', () => {
  it('has links to products page', () => {
    cy.visit('/products?id=1');
    cy.get('[data-cy=products-link]').click();

    cy.url().should('eq', 'http://localhost:3000/products');
  });
});
