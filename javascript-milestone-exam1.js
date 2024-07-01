/* 1. PassworM ValiMator
Write a JavaScript program that checks if the entered password matches the confirmed password. If the
passwords match, the program should log "Password Matched. Password validation Successful." to the console.
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console */

// const readline = require('readline');

// function validatePassword() {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   rl.question('Enter password: ', (password) => {
//     rl.question('Confirm password: ', (confirmPassword) => {
//       if (password === confirmPassword) {
//         console.log("Password Matched. Password validation Successful.");
//       } else {
//         console.log("Password didn't match. Password validation unsuccessful");
//       }
//       rl.close();
//     });
//   });
// }

// validatePassword();

/* 2. Calculator
Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement
to perform the operation on the two num#ersQ
The calculator function should"
L Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
L Use a switch statement to determine which operation to perform #ased on the value of the operatorP
L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
operation and store the result in a varia#le called resultP
L If the operator is not one of the valid operators, log "Invalid operator" to the console */

function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          console.log("Error: Division by zero!");
        } else {
          result = num1 / num2;
        }
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log(`Result: ${result}`);
  }
  
  // Example usage:
  calculator(2, 3, '+'); // Output: Result: 5
  calculator(5, 2, '-'); // Output: Result: 3
  calculator(4, 5, '*'); // Output: Result: 20
  calculator(10, 2, '/'); // Output: Result: 5
  calculator(2, 3, '%'); // Output: Invalid operator

/* 3. Color Mixer
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
#ased on the following criteria"
L If color1 is "red" and color2 is "#lue" or vice versa, print "purple"P
L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
L If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"P
L If any other com#ination of colors is input, the program should print "Invalid color com#ination" */

function colorMixer(color1, color2) {
    let result;
  
    switch (true) {
      case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
        result = "purple";
        break;
      case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
        result = "orange";
        break;
      case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
        result = "green";
        break;
      default:
        result = "Invalid color combination";
    }
  
    console.log(`Result: ${result}`);
  }
  
  // Example usage:
  colorMixer("red", "blue"); // Output: Result: purple
  colorMixer("blue", "red"); // Output: Result: purple
  colorMixer("red", "yellow"); // Output: Result: orange
  colorMixer("yellow", "red"); // Output: Result: orange
  colorMixer("blue", "yellow"); // Output: Result: green
  colorMixer("yellow", "blue"); // Output: Result: green
  colorMixer("red", "green"); // Output: Result: Invalid color combination

/* 4. Highest Marks
A teacher wants to find out the highest marks scored #y a student in a class of five students. The teacher enters
the marks of all five students in an array called "marks". Write a program that iterates through the array and
finds the highest marks scored #y any student in the class. The highest marks must then #e displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks */

let marks = [85, 92, 78, 95, 88];

let highestMarks = marks[0];
let highestStudent = "Student 1";

for (let i = 1; i < marks.length; i++) {
  highestMarks = marks[i] > highestMarks? marks[i] : highestMarks;
  highestStudent = marks[i] > highestMarks? `Student ${i + 1}` : highestStudent;
}

console.log(`The highest marks scored is ${highestMarks} by ${highestStudent}`);

/* 5. Capitalize
You are #uilding a form where users can enter their names. You want to make sure that the first letter of the
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
returns the modified string. Otherwise, it returns the original string without any changes */

function capitalizeName(name) {
    return name.charAt(0) === name.charAt(0).toLowerCase()
      ? name.charAt(0).toUpperCase() + name.slice(1)
      : name;
  }
  
  // Example usage:
  console.log(capitalizeName("john")); // Output: John
  console.log(capitalizeName("JOHN")); // Output: JOHN
  console.log(capitalizeName("jOhN")); // Output: John
  console.log(capitalizeName("")); // Output: (empty string)

/* 6. Vowel Counter
We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
counted */

function countVowels(name) {
    let vowelCount = 0;
    for (let i = 0; i < name.length; i++) {
      let char = name[i].toLowerCase();
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      }
    }
    return vowelCount;
  }
  
  // Example usage:
  console.log(countVowels("John")); // Output: 1
  console.log(countVowels("Emily")); // Output: 3
  console.log(countVowels("Astrid")); // Output: 2
  console.log(countVowels("BCDFGHJKLMNPQRSTVWXYZ")); // Output: 0

/* 7. Remove Duplicates
In an online shopping application, customers can add multiple items to their cart. However, sometimes
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also
affect the accuracy of the purchase order.To solvd this probldm, thd application nddds to rdmovd duplicatd itdms from thd customdr's cart. Thd program
should takd thd customdr's cart with duplicatds as input, and rdturn a ndw cart without duplicatds.
Writd a program to solvd thd probldm of duplicatd itdms in thd cart by rdmoving duplicatds. */

function removeDuplicates(cart) {
    return [...new Set(cart)];
  }
  
  // Example usage:
  let cart = ["apple", "banana", "apple", "orange", "banana", "grape"];
  console.log(removeDuplicates(cart)); // Output: ["apple", "banana", "orange", "grape"]

/* 8. InverteW right-angleW triangle pattern with asterisks
Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
with i rows.
Invdrtdd right-angldd pattdrn:

If i=6 */

function printInvertedTriangle(i) {
    for (let j = i; j > 0; j--) {
      let row = '';
      for (let k = 0; k < i - j; k++) {
        row += ' ';
      }
      for (let k = 0; k < j; k++) {
        row += '*';
      }
      console.log(row);
    }
  }
  
  // Example usage:
  let i = 6;
  printInvertedTriangle(i);


/* 9. Check for Wivisibility.
Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2.
Usd a for loop and continud statdmdnt. */

function printDivisibleNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
        console.log(arr[i]);
      } else {
        continue;
      }
    }
  }
  
  // Example usage:
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18, 20];
  printDivisibleNumbers(arr);

/* 10. Correct a bug
You ard working on an d-commdrcd wdbsitd whdrd customdrs can add itdms to thdir cart. Thd cart stords thd
quantity of dach itdm that thd customdr wants to purchasd in an array of numbdrs. Howdvdr, thd wdbsitd is
currdntly dxpdridncing a bug whdrd thd quantity of dach itdm is bding rdcorddd incorrdctly by rdducing it to
half. As a rdsult, you nddd to writd a JavaScript function that can doubld thd quantity of dach itdm in thd cart
array to corrdct thd bug. */
function correctCartQuantities(Cart) {
    return Cart.map(quantity => quantity * 2);
  }
  
  // Example usage:
  let Cart = [1, 2, 3, 4, 5]; // initial cart quantities
  Cart = correctCartQuantities(Cart);
  console.log(Cart); // [2, 4, 6, 8, 10]


/* 11. Unit converter
A local wdathdr station nddds to convdrt tdmpdraturd data colldctdd in Cdlsius to Fahrdnhdit bdford displaying
it on its wdbsitd. Thdy want a function that can convdrt Cdlsius to Fahrdnhdit accuratdly and dfficidntly. Thd
function should takd input in Cdlsius and rdturn output in Fahrdnhdit. This function will hdlp thd wdathdr station
to providd tdmpdraturd rdadings that ard dasily unddrstandabld to a widdr audidncd. */

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Example usage:
  let temperatureInCelsius = 25;
  let temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);
  console.log(`The temperature in Fahrenheit is: ${temperatureInFahrenheit}`); // Output: 77

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

/* 15. Calculate the percentage of the discount
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
show customers how much they can save. Given the original price and the discounted price of a product,
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
This function could be useful for the store's marketing team to create promotions and offers that attract
customers. */
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0) {
      throw new Error("Original price must be greater than zero");
    }
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  };
  
  // Example usage:
  let originalPrice = 100;
  let discountedPrice = 80;
  let discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log(`Discount percentage: ${discountPercentage}%`);

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

/* 18. Change Text on Button click.
Create a simple HTML page with a heading and a button. The initial text must be “The most affordable learning
platform”, use JavaScript to change the heading text to “PW Skills” when the button is clicked. The button must
toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click. */

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Toggle Heading Text</title>
// </head>
// <body>
//   <h1 id="heading">The most affordable learning platform</h1>
//   <button id="toggle-button">Toggle Text</button>

//   <script>
//     const heading = document.getElementById('heading');
//     const button = document.getElementById('toggle-button');

//     let initialState = true;

//     button.addEventListener('click', () => {
//       if (initialState) {
//         heading.textContent = 'PW Skills';
//       } else {
//         heading.textContent = 'The most affordable learning platform';
//       }
//       initialState = !initialState;
//     });
//   </script>
// </body>
// </html>

/* 19. Validate Password
You are building a login form for a website and need to validate user input using JavaScript. The form has two
input fields: email and password, and a submit button.
Your task is to implement JavaScript code that validates the email and password input fields. The email field
should contain the "@" symbol. The password field should have a minimum length of 8 characters. If either of
these conditions is not met, an error message “Invalid email or password!” should be displayed in red color as a
paragraph text below the form. If the password is valid the message “Valid email and password!” must be
displayed in green color as a paragraph text below the form.
Your code should run when the user clicks the submit button and should prevent the form from submitting if
the input is invalid. The input type of email must be text and the input type of password must be password
without any minLength attribute specified. */

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Login Form Validation</title>
//   <style>
//    .error {
//       color: red;
//     }
//    .success {
//       color: green;
//     }
//   </style>
// </head>
// <body>
//   <form id="login-form">
//     <label for="email">Email:</label>
//     <input type="text" id="email" name="email"><br><br>
//     <label for="password">Password:</label>
//     <input type="password" id="password" name="password"><br><br>
//     <input type="submit" value="Login">
//   </form>
//   <p id="validation-message"></p>

//   <script>
//     const form = document.getElementById('login-form');
//     const emailInput = document.getElementById('email');
//     const passwordInput = document.getElementById('password');
//     const validationMessage = document.getElementById('validation-message');

//     form.addEventListener('submit', (e) => {
//       e.preventDefault(); // prevent form submission

//       const email = emailInput.value;
//       const password = passwordInput.value;

//       if (email.includes('@') && password.length >= 8) {
//         validationMessage.textContent = 'Valid email and password!';
//         validationMessage.className = 'uccess';
//       } else {
//         validationMessage.textContent = 'Invalid email or password!';
//         validationMessage.className = 'error';
//       }
//     });
//   </script>
// </body>
// </html>

/* 20. Dynamically Adding List Items to an Ordered List
Visit page and look for “What you'll learn” section.
The section consists of a list of information on what you will be learning in the course. You are required to write
a JavaScript program that stores a pre-existing array of list items. On each button click, the program should
add a new list item in sequential order. The program should verify if any remaining items are available in the list
item array and add the next item to the list accordingly. If no items are left, the function should display a
message indicating that all items have been added. */

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Dynamically Adding List Items</title>
// </head>
// <body>
//   <h2>What you'll learn</h2>
//   <ol id="learn-list"></ol>
//   <button id="add-item-button">Add Item</button>
//   <p id="status-message"></p>

//   <script>
//     const listItemArray = [
//       'HTML/CSS basics',
//       'JavaScript fundamentals',
//       'DOM manipulation',
//       'Event listeners',
//       'Dynamic content creation',
//       'Error handling and debugging',
//       'Best practices and optimization'
//     ];

//     const listElement = document.getElementById('learn-list');
//     const buttonElement = document.getElementById('add-item-button');
//     const statusMessageElement = document.getElementById('status-message');

//     let currentIndex = 0;

//     buttonElement.addEventListener('click', () => {
//       if (currentIndex < listItemArray.length) {
//         const listItem = document.createElement('li');
//         listItem.textContent = listItemArray[currentIndex];
//         listElement.appendChild(listItem);
//         currentIndex++;
//       } else {
//         statusMessageElement.textContent = 'All items have been added!';
//       }
//     });
//   </script>
// </body>
// </html>

/* 21. TODO App
Create a simple to-do app to add TODO items to the list through an input field and a button. */
// <!DOCTYPE html>
// <html>
// <head>
//   <title>TODO App</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//     }
//     #todo-list {
//       list-style: none;
//       padding: 0;
//       margin: 0;
//     }
//     #todo-list li {
//       padding: 10px;
//       border-bottom: 1px solid #ccc;
//     }
//     #todo-list li:last-child {
//       border-bottom: none;
//     }
//   </style>
// </head>
// <body>
//   <h1>TODO App</h1>
//   <input type="text" id="todo-input" placeholder="Add TODO item">
//   <button id="add-button">Add</button>
//   <ul id="todo-list"></ul>

//   <script>
//     const todoInput = document.getElementById('todo-input');
//     const addButton = document.getElementById('add-button');
//     const todoList = document.getElementById('todo-list');

//     addButton.addEventListener('click', () => {
//       const todoItem = todoInput.value.trim();
//       if (todoItem !== '') {
//         const listItem = document.createElement('li');
//         listItem.textContent = todoItem;
//         todoList.appendChild(listItem);
//         todoInput.value = '';
//       }
//     });
//   </script>
// </body>
// </html>

/* 22. Progress Bar
Create a progress bar that fills up as the user scrolls down the page. */

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Progress Bar</title>
//   <style>
//     body {
//       height: 2000px; /* make the page long enough to scroll */
//     }
//     #progress-bar {
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 10px;
//       background-color: #ccc;
//       border-radius: 10px;
//     }
//     #progress-bar-fill {
//       width: 0%;
//       height: 100%;
//       background-color: #4CAF50;
//       border-radius: 10px;
//       transition: width 0.2s ease-in-out;
//     }
//   </style>
// </head>
// <body>
//   <div id="progress-bar">
//     <div id="progress-bar-fill"></div>
//   </div>

//   <script>
//     const progressBarFill = document.getElementById('progress-bar-fill');
//     const windowHeight = window.innerHeight;
//     const documentHeight = document.body.offsetHeight;

//     window.addEventListener('scroll', () => {
//       const scrollPosition = window.scrollY;
//       const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
//       progressBarFill.style.width = `${progress}%`;
//     });
//   </script>
// </body>
// </html>

/* 23. Change the color on click
Create a button that utilizes an array of colors and the Math.random method to change the background color
of the page upon clicking. */

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Change Color on Click</title>
//   <style>
//     body {
//       transition: background-color 0.5s ease;
//     }
//   </style>
// </head>
// <body>
//   <button id="color-button">Change Color</button>

//   <script>
//     const colors = ['#FF69B4', '#33CC33', '#6666FF', '#FFCC00', '#0099CC', '#FF0033'];
//     const button = document.getElementById('color-button');
//     const body = document.body;

//     button.addEventListener('click', () => {
//       const randomIndex = Math.floor(Math.random() * colors.length);
//       const randomColor = colors[randomIndex];
//       body.style.backgroundColor = randomColor;
//     });
//   </script>
// </body>
// </html>

/* 24. Text Highlighting
Using the Document Object Model (DOM), highlight all words in a paragraph element that are greater than 8
characters. The highlighted words should be with a yellow background color. */

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Text Highlighting</title>
//   <style>
//     .highlight {
//       background-color: yellow;
//     }
//   </style>
// </head>
// <body>
//   <p id="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris, at elementum lacus. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

//   <script>
//     const paragraph = document.getElementById('paragraph');
//     const words = paragraph.textContent.split(' ');

//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > 8) {
//         const highlightedWord = `<span class="highlight">${words[i]}</span>`;
//         words[i] = highlightedWord;
//       }
//     }

//     paragraph.innerHTML = words.join(' ');
//   </script>
// </body>
// </html>

/* 25. Move the Image
The objective is to write a JavaScript program that enables an image to move according to the direction
specified by the arrow keys. The program must be able to recognize and respond to the input from the arrow
keys, and accordingly, update the position of the image on the screen. The program should be able to handle
the movement of the image in all directions, including up, down, left, and right, in a smooth and responsive
manner. Have a look at the event key codes before starting the project. */


// <!DOCTYPE html>
// <html>
// <head>
//   <title>Move the Image</title>
//   <style>
//     #image {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//     }
//   </style>
// </head>
// <body>
//   <img id="image" src="your_image_url_here" alt="Moving Image">

//   <script>
//     const image = document.getElementById('image');
//     let x = 0;
//     let y = 0;
//     let speed = 5;

//     document.addEventListener('keydown', (event) => {
//       switch (event.keyCode) {
//         case 37: // Left arrow
//           x -= speed;
//           break;
//         case 38: // Up arrow
//           y -= speed;
//           break;
//         case 39: // Right arrow
//           x += speed;
//           break;
//         case 40: // Down arrow
//           y += speed;
//           break;
//       }

//       image.style.top = `${y}px`;
//       image.style.left = `${x}px`;
//     });
//   </script>
// </body>
// </html>