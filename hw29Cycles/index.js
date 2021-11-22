/*----------Цикли----------------

==========Task1=================
//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let v1 = Number(prompt('Enter number'));
console.log('v1', v1);
let v2 = Number(prompt('Enter number'));
console.log('v2', v2);
if (v1 > v2) {
  let v4 = v1;
  v1 = v2;
  v2 = v4;
}
let v3 = null;
for (let i = v1; i <= v2; i++) {
  console.log(i);
  v3 = i + v3;
}
console.log('v3', v3);
*/


//-----------Task2-------------
//Запросить 2 числа и найти только наибольший общий делитель.

/* let v1 = prompt('Enter number 1');
let v2 = prompt('Enter number 2');
for (let index = v1; index <= v1; index--) {
  if (v1 % index == 0 && v2 % index == 0) {
    alert(`${index}`)
    break
  }
} */

//============Task3==========
//Запросить у пользователя число и вывести все делители этого числа

/* let num = prompt('Enter number');
for (let i = 0; i <= num; i++) {
  if (num % i == 0) {
    console.log(i)
  }
} */

//==========Task4=========
//Определить количество цифр в введенном числе.
/* let number = prompt('Enter number')
let quantity = 0;
for (let i = 1; number / i >= 1; i *= 10) {
  quantity++;
}
console.log(quantity); */


//===========Task5============
/* Запросить у пользователя 10 чисел и подсчитать,
сколько он ввел положительных, отрицательных и нулей.
 При этом также посчитать, сколько четных и нечетных.
 Вывести статистику на экран.
 Учтите, что достаточно одной переменной (не 10)
  для ввода чисел пользователем. */

/* let positiveNumbers = 0;
let negativeNumbers = 0;
let evenNumbers = 0;
let oddNumbers = 0;
let zeroNumbers = 0;
let num;
for (let i = 1; i <= 10; i++) {
  num = prompt('Enter number');
  if (num == 0) {
    zeroNumbers = zeroNumbers + 1;
  } else if (num > 0) {
    positiveNumbers = positiveNumbers + 1;
  } else if (num < 0) {
    negativeNumbers = negativeNumbers + 1;
  } else if (num % 2 == 0) {
    evenNumbers = evenNumbers + 1;
  } else {
    oddNumbers = oddNumbers + 1;
  }
}
console.log('zeroNumbers ' + zeroNumbers);
console.log('positiveNumbers ' + positiveNumbers);
console.log('negativeNumbers ' + negativeNumbers);
console.log('evenNumbers ' + evenNumbers);
console.log('oddNumbers ' + oddNumbers); */



//==============Task6=============
/* Зациклить калькулятор. Запросить у пользователя 2 числа
и знак, решить пример, вывести результат и спросить,
хочет ли он решить еще один пример. И так до тех пор,
пока пользователь не откажется. */
/* let firstNumber;
let secondNumber;
let result;
let userAnswer;
for (userAnswer = 'Yes'; userAnswer == 'Yes'; userAnswer = prompt('Repeat the operation? Yes/No')) {
  firstNumber = Number(prompt('Enter first number'));
  secondNumber = Number(prompt('Enter second number'))
  let mathematicalAction = prompt('Enter mathematical action + - * /');

  switch (mathematicalAction) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
      break;
  }
  console.log(result);
}
 */


//==========Task7============
/* Запросить у пользователя число и на сколько цифр его сдвинуть.
 Сдвинуть цифры числа и вывести результат
 (если число 123456 сдвинуть на 2 цифры, то получится 345612).*/

/* let num = prompt("Введите число!");
let moveNumber = prompt("На сколько цифр его сдвинуть?");

console.log(num.slice(moveNumber) + num.slice(0, moveNumber)); */


// ==========Task8============
/*Зациклить вывод дней недели таким образом: «День недели.
Хотите увидеть следующий день?» и так до тех пор,
пока пользователь нажимает OK*/

/* let currentDay = 'Sunday';
let isYes;
for (isYes = true; isYes == true; isYes = confirm(`Сurrent day ${currentDay}, want to continue?`)) {

  if (currentDay == 'Monday') {
    currentDay = 'Tuesday';
  } else if (currentDay == 'Tuesday') {
    currentDay = 'Wednesday';
  } else if (currentDay == 'Wednesday') {
    currentDay = 'Thursday';
  } else if (currentDay == 'Thursday') {
    currentDay = "Friday";
  } else if (currentDay == "Friday") {
    currentDay = 'Saturday';
  } else if (currentDay == 'Saturday') {
    currentDay = 'Sunday';
  } else if (currentDay == 'Sunday') {
    currentDay = 'Monday';
  }
} */



//================Task9===============
/* Вывести таблицу умножения для всех чисел от 2 до 9.
Каждое число необходимо умножить на числа от 1 до 10. */


/* for (let a = 2; a <= 9; a++) {
  for (let b = 1; b <= 10; b++) {
    console.log(b);
    let result = a * b;
    console.log(a + ' * ' + b + ' = ' + result)
  }
} */



//===============Task10=================
/* Игра «Угадай число». Предложить пользователю загадать число
от 0 до 100 и отгадать его следующим способом:
каждую итерацию цикла делите диапазон чисел пополам,
записываете результат в N и спрашиваете у пользователя
«Ваше число > N, < N или == N ?». В зависимости от того,
что указал пользователь, уменьшаете диапазон.
Начальный диапазон от 0 до 100, поделили пополам и получили 50.
Если пользователь указал, что его число > 50,
то изменили диапазон на от 51 до 100. И так до тех пор,
пока пользователь не выберет == N. */
