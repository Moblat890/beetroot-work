/* Створити HTML-сторінку зі світлофором і кнопкою,
 яка перемикає світлофор на наступний колір. */

const btn = document.querySelector('#switch');
const lamp1 = document.querySelector('.lamp1');
const lamp2 = document.querySelector('.lamp2');
const lamp3 = document.querySelector('.lamp3');

btn.onclick = function () {
  let lamps = document.querySelectorAll('.lamp')
  let j;
  for (i = 0; i < lamps.length; i++) {

    j = i + 1;
  }
}