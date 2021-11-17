//  Task1
/* let a;
let b;
function showNumb(a, b) {
  if (a < b) {
    console.log('-1');
  } else if (a > b) {
    console.log('1');
  } else if (a == b) {
    console.log('0');
  }
}
showNumb() */


//           Task2           
function firstFactorial(num) {

  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(firstFactorial(3));


//            Task3

