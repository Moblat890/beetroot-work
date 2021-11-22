//---------Типи даних----------
//            Task 1
//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
/*let age = prompt('How old are you?', 0);
if (age <= 2) {
 console.log('You are a child');
}
else if (age >= 12 && age < 18) {
 console.log('You are a teenager');
}
else if (age >= 18 && age < 60) {
 console.log('You are an adult');
}
else if (age >= 60) {
 console.log('You are a retired');
} */



//          Task2
/*Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/

/*let number = prompt('Enter the number from 0 to 9');
switch (number) {

  case '0':
    console.log('0 is )');
    break;
  case '1':
    console.log('1 is !'); 3
    break;
  case '2':
    console.log('2 is @');
    break;
  case '3':
    console.log('3 is #');
    break;
  case '4':
    console.log('4 is $');
    break;
  case '5':
    console.log('5 is %');
    break;
  case '6':
    console.log('6 is ^');
    break;
  case '7':
    console.log('7 is &');
    break;
  case '8':
    console.log('8 is *');
    break;
  case '9':
    console.log('9 is (');
    break;
    default:

} */


//     Task3
/*Запросить у пользователя трехзначное число и проверить,
есть ли в нем одинаковые цифры.*/

/* let num = prompt(' Enter number from 100 to 999', 0);
if (num[0] == num[1] || num[0] == num[2] || num[1] == num[2]) {
  alert('There are the same numbers');
} else {
  alert('There are no identical numbers');
} */



//     Task4      
/*Запросить у пользователя год и проверить, високосный он или нет.
Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.*/
/* let year = prompt('Enter any year', 0);
if (year % 4 == 0 && year % 100 !== 0) {
  alert('Leap year');
} else {
  alert('Not Leap year');
} */


//       Task5        
//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
/* let num = prompt('Enter number from 10000 to 99999', 0);
if ((num[0] === num[4]) && (num[1] === num[3])) {
  num = 'Palindrome';
} else {
  num = 'Not a palindrome';
}
console.log(num); */

//           Task6          
//Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
/* let amount = prompt('Enter the amount of USD');
let currency = prompt('EUR = 1, UAN = 2, AZN = 3');
switch (currency) {
  case '1':
    console.log(amount * 0, 87 + 'EUR');
    break;
  case '2':
    console.log(amount * 26.17 + 'UAN');
    break;
  case '3':
    console.log(amount * 1.70 + 'AZN')
    break;
} */

//          Task7      
/*Запросить у пользователя сумму покупки и
вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%,
от 300 до 500 – 5%, от 500 и выше – 7%*/
/* let amount = prompt('Enter purchase amount');
if (amount >= 200 && amount < 300) {
  alert(amount - amount * 0.03 + '$ with 3% discount');
} else if (amount >= 300 && amount < 500) {
  alert(amount - amount * 0.05 + '$ with 5% discount');
} else if (amount >= 500) {
  alert(amount - amount * 0.07 + '$ with 7% discount');
} */

//          Task 8          
/* Запросить у пользователя длину окружности и периметр квадрата.
Определить, может ли такая окружность поместиться в указанный квадрат. */
// l = πd;
// P = 4 * a;
//d = P/π;
/* let circuit = Number(prompt('Enter circuit'));
let thePerimeterOfTheSquare = Number(prompt('Enter the Perimeter Of The Square'));
let diametr = circuit / Math.PI;
let sideOfTheSquare = thePerimeterOfTheSquare / 4;
if (diametr <= sideOfTheSquare) {
  console.log('true');
} else {
  console.log('false');
} */




//         Task9           
/*Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
За каждый правильный ответ начисляется 2 балла.
После вопросов выведите пользователю количество набранных баллов.*/

/* let capital = prompt('What is the capital of France? 1 - Bordo, 2 - Paris, 3 - Berlin');
let currency = prompt('What is the currency of Poland? 1 - UAN, 2 - USD, 3 - PLN');
let worldСup = prompt('Which national football team won the world championship the most? 1 - Brasil, 2 - Germany, 3 - Italy')
let scores = 0;
if (capital == 2)
  scores += 2;
if (currency == 3)
  scores += 2;
if (worldСup == 1)
  scores += 2;
alert('Your result is ' + scores); */



//      Task10
// Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
// Учтите возможность перехода на следующий месяц, год, а также високосный год.
/* let day = 28;
let month  = 02;
let year = 2004;
let nextDay = day;
let nextMonth = month;
let nextYear = year;
let daysPerMonth;

 if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
  daysPerMonth = 31
} else if (month == 2) {

  if (year % 400 == 0 ||  year % 4 == 0 && year % 100 !== 0)// perevirka na vysokos
  {
    daysPerMonth = 29
  } else daysPerMonth = 28;

} else {
  daysPerMonth = 30;
}

if (daysPerMonth > day ){
  nextDay = day + 1;
} else {
  nextMonth = month + 1;
  nextDay = 1;
 }

if (day == 31 && month == 12) {
  nextDay = 1;
  nextMonth = 1;
  nextYear = year + 1;
}

console.log(day, month, year );
console.log(nextDay, nextMonth, nextYear);
 */





