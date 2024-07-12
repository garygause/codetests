/**
 * An array and a number A is given. Determine if any two numbers within the array sum to A
 */

// O(n^2)
function isTwoSum(numbers, A) {
  for (const num of numbers) {
    const result = A - num;
    if (result === num) continue; // same number
    if (numbers.includes(result)) {
      console.log(`${A} = ${num} + ${result}`);
      return true;
    }
  }
  return false;
}

// better version
// O(n)
function isTwoSumBetter(numbers, A) {
  const seen = new Set();
  for (const num of numbers) {
    const result = A - num;
    if (result !== num && seen.has(result)) {
      console.log(`${A} = ${num} + ${result}`);
      return true;
    }
    seen.add(num);
  }
  return false;
}

console.log(
  'Any two numbers? ',
  isTwoSumBetter([1, 2, 3, 4, 5, 6, 7, 9, 10], 11)
);
