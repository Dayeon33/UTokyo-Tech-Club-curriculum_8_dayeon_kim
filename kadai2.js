const fizzBuzz = (arr) => {
  return arr.map((x) => {
    if (x % 15 === 0) return "Fizz Buzz";
    if (x % 3 === 0) return "Fizz";
    if (x % 5 === 0) return "Buzz";
    return x;
  });
};

let range = [];
for (let i = 0; i < 100; i++) {
  range.push(i);
}

console.log(fizzBuzz(range));
