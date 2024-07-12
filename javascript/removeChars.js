/**
 * An array of characters and a string B is given.
 * Write a function to return the string B with all
 * the characters from the array removed.
 */

// O(n*m)
function removeChars(chars, B) {
  let output = '';
  for (const ltr of B) {
    if (!chars.includes(ltr)) {
      output += ltr;
    }
  }
  return output;
}

console.log('removeChars: ', removeChars(['a', 'b', 'c'], 'carboniferous'));

// improved O version
// O(n+m)
function removeCharsBetter(chars, B) {
  const charSet = new Set(chars);
  let output = '';
  for (const ltr of B) {
    if (!charSet.has(ltr)) {
      output += ltr;
    }
  }
  return output;
}
console.log(
  'removeCharsBetter: ',
  removeCharsBetter(['a', 'b', 'c'], 'carboniferous')
);
