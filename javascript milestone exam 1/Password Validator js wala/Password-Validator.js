/* 1. PassworM ValiMator
Write a JavaScript program that checks if the entered password matches the confirmed password. If the
passwords match, the program should log "Password Matched. Password validation Successful." to the console.
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console */

const readline = require('readline');

function validatePassword() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter password: ', (password) => {
    rl.question('Confirm password: ', (confirmPassword) => {
      if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
      } else {
        console.log("Password didn't match. Password validation unsuccessful");
      }
      rl.close();
    });
  });
}

validatePassword();