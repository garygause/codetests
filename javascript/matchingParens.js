/**
 * You are given a string with the symbols ( and ),
 * and you need to write a function that will determine
 * if the parenthesis are correctly nested in the string,
 * which means every opening ( has a closing ).
 */

function hasMatchingSymbols(checkString, open = '(', close = ')') {
  let openParens = 0;
  for (let char of checkString) {
    if (openParens < 0) return false;
    if (char === '(') {
      openParens += 1;
    } else if (char === ')') {
      openParens -= 1;
    }
  }
  return openParens === 0;
}

console.log('hasMatchingSymbols: ', hasMatchingSymbols('(here we (go))()'));
