// Prompt: 자연수 N을 받아 Fibonacci 수열 배열 반환
const fibo = (N) => {
  let result = [0, 1];
  for (let i = 2; i <= N; i++) {
    result.push(result[i - 1] + result[i - 2]); // Add previous two numbers
  }
  return result.slice(0, N + 1); // N번째까지 자르기
};
