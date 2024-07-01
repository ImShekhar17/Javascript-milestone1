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