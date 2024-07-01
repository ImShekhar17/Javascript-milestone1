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