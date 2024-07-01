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