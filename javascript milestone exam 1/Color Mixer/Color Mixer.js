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