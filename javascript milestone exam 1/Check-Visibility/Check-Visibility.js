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