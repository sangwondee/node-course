// Object property shorthand

// const name = "Wichan";
// const userAge = 31;

// const user = {
//     name,
//     age: userAge,
//     location: 'Thailand'
// }

// console.log(user);

// Object destructuring
// video section 6 order 39
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const { label:productLabel, stock, rating = 5 } = product

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction('order', product);