const {products} = require('./products.js')

// console.log(products);

const shopProduct = (productName) => {
    const res = products.filter((product)=> product.name == productName)
    console.log(res);
}
shopProduct('PC')
shopProduct('keyboard')