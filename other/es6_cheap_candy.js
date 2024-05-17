let products = [ 
    {product: "Gummy Worms", price: 5.79}, 
    {product: "Plain M&Ms", price: 2.89}, 
    {product: "Peanut M&Ms", price: 2.89}, 
    {product: "Swedish Fish", price: 3.79}, 
    {product: "Sour Patch Kids", price: 4.99},
    {product: "Reese's", price: 3.49},
    {product: "Hershey's", price: 1.99},
    {product: "Jelly Beans", price: 6.49},
    {product: "Twizzlers", price: 2.69},
    {product: "Skittles", price: 2.29}
    // TODO:  fill the array with 10 candies of various price ranges 
 ]; 

// Which candies costs less than $4.00? 

let someProducts = products.filter(p => p.price < 4.00);

for (let i = 0; i < someProducts.length; i++) {
    console.log(someProducts[i].product + " - $" + someProducts[i].price);
}

console.log(`--------------------`)

// Which candies has "M&M" its name? 
let someProducts2 = products.filter(p => p.product.includes("M&M"));

for (let i = 0; i < someProducts2.length; i++) {
    console.log(someProducts2[i].product);
}

console.log(`--------------------`)

// Do we carry "Swedish Fish"? 
let hasSwedishFish = false; 
let someProducts3 = products.filter(p => p.product === "Swedish Fish");
for (let i = 0; i < someProducts3.length; i++) {
    hasSwedishFish = true; 
    break; 
}

console.log(hasSwedishFish);