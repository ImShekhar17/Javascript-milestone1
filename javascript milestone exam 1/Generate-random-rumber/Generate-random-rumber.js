/* 16. Generate a random number
Create a JavaScript program that generates a random number between 1 and 100 when the program starts.
Use a self-invoking arrow function to generate the random number. This program can be used as a component
in various games or applications that require a random number generator. */
(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number: ${randomNumber}`);
  })();
  
  // Output: Random number: <a random number between 1 and 100>

/*  */
const customerAccount = {
    name: 'John Doe',
    balance: 1000.00,
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit of $${amount} successful. New balance: $${this.balance}`);
      } else {
        console.log('Invalid deposit amount. Please try again.');
      }
    },
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal of $${amount} successful. New balance: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log('Insufficient funds. Please try again.');
      } else {
        console.log('Invalid withdrawal amount. Please try again.');
      }
    },
  
    getBalance() {
      console.log(`Current balance: $${this.balance}`);
    }
  };
  
  // Example usage:
  customerAccount.getBalance(); // Output: Current balance: $1000.00
  customerAccount.deposit(500.00); // Output: Deposit of $500.00 successful. New balance: $1500.00
  customerAccount.withdraw(200.00); // Output: Withdrawal of $200.00 successful. New balance: $1300.00
  customerAccount.getBalance(); // Output: Current balance: $1300.00