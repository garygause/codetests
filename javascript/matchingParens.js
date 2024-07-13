/**
 * You are given a string with the symbols ( and ),
 * and you need to write a function that will determine
 * if the parentheses are correctly nested in the string,
 * which means every opening ( has a closing ).
 */

function hasMatchingSymbols1(checkString, open = '(', close = ')') {
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

console.log('hasMatchingSymbols: ', hasMatchingSymbols1('(here we (go))()'));

function hasMatchingSymbols(checkString, openSymbol = '(', closeSymbol = ')') {
  // keep running total of open symbols
  let openSymbols = 0;

  for (let char of checkString) {
    // if we go negative, then we have a dangling close symbol
    if (openSymbols < 0) return false;

    if (char === openSymbol) {
      openSymbols += 1;
    } else if (char === closeSymbol) {
      openSymbols -= 1;
    }
  }
  // anything but zero here is a false result
  return openSymbols === 0;
}

console.log(
  'hasMatchingSymbols: ',
  hasMatchingSymbols('(here we (go))(', '(', ')')
);
