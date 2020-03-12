const products = [
  {
    name: 'table',
    description: 'nice table',
    price: 10,
  },
  {
    name: 'chair',
    description: 'nice chair',
    price: 20,
  },
  {
    name: 'carpet',
    description: 'nice carpet',
    price: 30,
  },
];
exports.up = async function(sql) {
  console.log('Inserting product into the table...');

  await sql`
 INSERT INTO products 
 ${sql(products, 'name', 'description', 'price')}
 `;
};

exports.down = async function(sql) {
  console.log('Deleting product from the table...');

  await sql`
DELETE FROM products
 WHERE name in (${products.map(product => product.name)});

  `;
};
