/*
An online store stores product prices in an object.

const products = {
  Laptop: 60000,
  Mobile: 25000,
  Tablet: 18000,
  Headphone: 5000
};

Apply a 10% discount to every product.
 */

const products = {
    Laptop: 60000,
    Mobile: 25000,
    Tablet: 18000,
    Headphone: 5000
  };

for(let key in products){
    const discount = products[key] * (1 - 10 / 100)
    products[key] = discount
}
console.log(products)

