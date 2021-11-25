//  Task1
/*Написать функцию, которая принимает 2 числа
и возвращает -1, если первое меньше, чем второе;
1 – если первое больше, чем второе; и 0 – если числа равны.*/
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


/*           Task2
Написать функцию, которая вычисляет факториал
переданного ей числа.*/

/* function firstFactorial(num) {

  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(firstFactorial()); */


//            Task3
/*Написать функцию, которая принимает три отдельные цифры
и превращает их в одно число.
Например: цифры 1, 4, 9 превратятся в число 149.*/


/* function numberConversion(a, b, c) {
  let num;
  num = String(a) + String(b) + String(c);
  return Number(num);
}
console.log(numberConversion(7, 4, 8));
 */

//Task4
/* Написать функцию, которая принимает длину и ширину прямоугольника
и вычисляет его площадь.Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
 */
/* function shapeArea(a, b) {
  if (a && b == undefined) {  //Якщо a - ввели, b - ні;
    return a * a;
  } else if (a && b) { // Якщо ввели a і b;
    return a * b;
  } else {  //Якщо нічого не ввели;
    return 'Enter number';
  }
}
console.log(shapeArea(3, 5));
console.log(shapeArea(4));
console.log(shapeArea()); */

//        Task5
/* Написать функцию, которая проверяет, является ли переданное
ей число совершенным. Совершенное число – это число,
равное сумме всех своих собственных делителей. */
//1 + 2 + 4 + 7 + 14 = 28

/* let num = parseInt(prompt('Enter a number to check'));
let PerfectNumber = function (a) {
  let result = 0;
  for (i = 1; i < a; i++) {
    if (a % i === 0) {
      result += i;
    }
  }
  if (result === a) {
    return 'The number entered ' + a + ' is perfect';
  } else {
    return 'The number entered ' + a + ' is not perfect';
  }
}

console.log(PerfectNumber(num)); */


//=============Task6=============
/* Написать функцию, которая принимает минимальное и
максимальное значения для диапазона, и выводит только те числа
из диапазона, которые являются совершенными.
Используйте написанную ранее функцию, чтобы узнавать,
совершенное число или нет.
 */

/* let a1 = prompt('Enter first number');
let a2 = prompt('Enter second number');

let PerfectNumber = function (a) {
  let result = 0;
  for (i = 1; i < a; i++) {
    if (a % i === 0) {
      result += i;
    }
  }
  return result === a;   //  Boolean
}

function diapazon(start, end) {
  for (let i = a1; i <= a2; i++) {
    if (PerfectNumber(i)) {
      console.log(i);
    }
  }
}
diapazon(a1, a2); */


//==============Task7============
/* Написать функцию, которая принимает время (часы, минуты, секунды)
 и выводит его на экран в формате «чч:мм:сс».
 Если при вызове функции минуты и/или секунды не были переданы,
  то выводить их как 00. */









/*  Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
 */

function perfectNumber(num) {
  let result = 0;
  for (i = 1; i < num; i++) {
    if (num % i == 0) {
      result = result + i;
    }
  }
  if (num == result) {
    return true;
  } else {
    return false;
  }
}
//console.log(perfectNumber(27));


/* Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими.Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим. */
let start = 4;
let end = 30;

function diapazonNum(a, b) {
  const arr = [];
  for (i = a; i <= b; i++) {
    if (perfectNumber(i)) {
      arr.push(i)
      console.log(i);
    }
  }
  return arr;
}
console.log(diapazonNum(start, end));




