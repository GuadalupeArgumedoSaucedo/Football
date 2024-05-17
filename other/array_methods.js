let cart  = [ 
    {item: "Bread", price: 3.29, quantity: 2}, 
    {item: "Milk", price: 4.09, quantity: 1}, 
    {item: "T-Bone Steak", price: 12.99, quantity: 2}, 
    {item: "Baking Potato", price: 1.89, quantity: 6}, 
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1}, 
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1}, 
    {item: "Apples", price: 0.66, quantity: 6} 
    ]; 

/*a. Write code that searches the courses array using the map () function to
return only the item name and then use forEach () to display the list of
items.*/

function displayItem(_item) { 
    console.log(_item); 
    } 

function searchItem(_item) {
    return _item.item;
   }

  let itemList = cart.map(searchItem);
  itemList.forEach(displayItem);

console.log(`--------------------`)

/*b. Write code that determines the total cost of everything in the cart using
reduce (). In the reducer function, remember to account for the
possibility of there being more than 1 unit (ex: 5 apples rather than 1)!*/

function getSum(currentTotal, totalItems) {
    return currentTotal + (totalItems.price * totalItems.quantity);
   }

   let sum = cart.reduce(getSum, 0);
   console.log(`$${sum}`);

console.log(`--------------------`)

/*c. Revisit your code for (a) above. Can you sort the list before you display it?*/

function displayItem(_item) { 
    console.log(_item); 
    } 

function searchItem(_item) {
    return _item.item;
   }
   
  let itemListAlphabetical = cart.map(searchItem).sort();//add .sort itemList changed to itemListAlphabetical because you
  itemListAlphabetical.forEach(displayItem);//cannot redeclare block-scoped variable 'itemList'
