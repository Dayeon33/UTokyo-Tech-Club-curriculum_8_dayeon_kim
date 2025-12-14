// Get a natural number N from the user (convert string to number)
const N = Number(window.prompt("자연수를 입력해주세요"));

// Method 1: Calculate the sum using the formula
const ans1 = (N * (N + 1)) / 2;

// Method 2: Calculate the sum using a loop
let ans2 = 0;
for (let i = 1; i <= N; i++) {
  ans2 += i;
}

// Compare the two results and output the result using a ternary operator
document.write(ans1 === ans2 ? ans2 : "Failed to compute");
