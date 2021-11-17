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




//            Task8        
//Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK

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
