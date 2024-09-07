const products =[
    {name: "laptop", price: 120000},
    {name: "Mobile", price: 70000},
    {name: "laptop bag", price: 20000},
    {name: "watch", price: 20000},
    {name: "Mobile Charger", price: 1500},
];

let maxProduct= {name: "", price:0};
let minProduct= {name: "", price: Number.MAX_VALUE};

for(let product of products){
    if(product.price > maxProduct.price){
        maxProduct=product;
    }
    if(product.price<minProduct.price){
        minProduct=product;
    }
}

console.log(`the product with maximum amount is ${maxProduct.price} which is prices at Rs. ${maxProduct.price}`);

console.log(
    `The product with minimum ammount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`
  );