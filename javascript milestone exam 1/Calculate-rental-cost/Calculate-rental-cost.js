/* 12. Calculate rental cost
A car rdntal company nddds to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd
of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost.
Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd.
Thd rdntal costs arc
V Economy = Rs. 4FFF /- pdr day
V Midsizd = Rs. 1F,FFF /- pdr day
V Luxury = Rs. 2F,FFF /- pdr day. */

function calculateRentalCost(daysRented, carType) {
    let dailyRentalCost = 0;
    switch (carType) {
      case 'Economy':
        dailyRentalCost = 4000;
        break;
      case 'Midsize':
        dailyRentalCost = 15000;
        break;
      case 'Luxury':
        dailyRentalCost = 20000;
        break;
      default:
        throw new Error('Invalid car type');
    }
    return dailyRentalCost * daysRented;
  }
  
  // Example usage:
  let daysRented = 3;
  let carType = 'Midsize';
  let totalRentalCost = calculateRentalCost(daysRented, carType);
  console.log(`The total rental cost is: Rs. ${totalRentalCost}`); // Output: Rs. 45000

/* 13. Bill splitter
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
it and returns an object that contains the total bill and the bill to be paid by each person in the group. */

function calculateBill(dishes) {
    let totalBill = 0;
    for (let dish of dishes) {
      totalBill += dish.cost * dish.people;
    }
    let billPerPerson = totalBill / dishes.reduce((acc, dish) => acc + dish.people, 0);
    return { totalBill, billPerPerson };
  }
  
  // Example usage:
  let dishes = [
    { cost: 10, people: 2 },
    { cost: 20, people: 3 },
    { cost: 15, people: 2 }
  ];
  let bill = calculateBill(dishes);
  console.log(`Total bill: ${bill.totalBill}`);
  console.log(`Bill per person: ${bill.billPerPerson}`);

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