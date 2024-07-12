/**
 * print all of the numbers from 1 to 100, however...
 * - any number divisible by 3, print Fizz
 * - any number divisible by 5, print Buzz
 * - any number divisible by both 3 and 5, print FizzBuzz
 */

// O(1)
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) {
      output = 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }
    console.log(output ? output : i);
  }
}

fizzBuzz();

// better
// O(1)

function fizzBuzzBetter() {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0 && i % 5 === 0) {
      output = 'FizzBuzz';
    } else if (i % 3 === 0) {
      output = 'Fizz';
    } else if (i % 5 === 0) {
      output = 'Buzz';
    } else {
      output = i.toString();
    }
    console.log(output);
  }
}

fizzBuzzBetter();
