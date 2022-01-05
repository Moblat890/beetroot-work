function calculateGuests(guestsInput) {
  let result = '';

  for (const char of guestsInput) {
    if ('0123456789'.includes(char)) {
      result += char;
    } else if (result.length > 0) {
      break;
    }
  }

  return +result || 'not a number';
}
console.log(calculateGuests('Big company of 15 dudes'))