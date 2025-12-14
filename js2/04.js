// Ask the user to input a natural number
const n = Number(prompt("Enter a natural number"));

// Repeat from 1 to n
for (let i = 1; i <= n; i++) {
  // If i is divisible by both 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

    // If i is divisible by 3
  } else if (i % 3 === 0) {
    console.log("Fizz");

    // If i is divisible by 5
  } else if (i % 5 === 0) {
    console.log("Buzz");

    // Otherwise, output the number itself
  } else {
    console.log(i);
  }
}
