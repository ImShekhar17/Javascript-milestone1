/* 14. Calculate the final order price
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item. */
const calculateTotalCost = (cart) => cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

// Example usage:
let Totalcart = [
  { unitPrice: 10, quantity: 2 },
  { unitPrice: 20, quantity: 3 },
  { unitPrice: 15, quantity: 1 }
];
let totalCost = calculateTotalCost(Totalcart);
console.log(`Total cost: ${totalCost}`);
