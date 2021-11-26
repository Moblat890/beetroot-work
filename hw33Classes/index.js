//===========Task2===========
/* Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним кольором; 
  текст виводиться до тих пір, поки в маркері є чорнило; 
  один не пробільний символ — це 0,5% чорнил у маркері).
Реалізуй клас, що описує маркер, який можна перезаправляти. 
Успадкуй цей клас від простого маркера і додай метод для заправки.

Продемонструй роботу написаних методів. */



class Marker {

  constructor(color, quantity) {
    this.color = color;
    this.quantity = quantity;
  }

  print(text) {
    let canPrint = [];
    for (let i = 0; i < text.length; i++) {
      if (this.quantity > 0) {
        if (text[i] == ' ') {
          canPrint.push(text[i])
        } else if (text[i] != ' ') {
          canPrint.push(text[i]);
          this.quantity = this.quantity - 1;
        }
      }
      // mozhna ne vikoristovuvatu
      // } else if (text[i] == ' ') {
      //     canPrint.push(text[i]);
      //}
    }
    return canPrint.join('') + ' ' + ' text color ' + this.color;
  }

}


const plainMarker = new Marker('Green', 5);
console.log(plainMarker.print('te xt 001'));


class FillMarker extends Marker {
  constructor(color, quantity) {
    super(color, quantity);
  }
  fill(rivenDozapravki) {

    this.quantity = this.quantity + rivenDozapravki

  }
}
let fillMarker1 = new FillMarker('Red', 24)
console.log(fillMarker1)

fillMarker1.fill(26);
console.log(fillMarker1)

