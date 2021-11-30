/* Створити HTML - сторінку з кнопкою "Відкрити" і модальним вікном.
   На модальном вікні повинен бути текст і кнопка "Закрити".
   Спочатку модальне вікно не відображається.
   При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає. */


let modal = document.getElementById("myModal");

let span = document.getElementsByClassName("close")[0];

let btn = document.getElementById("myBtn");

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

