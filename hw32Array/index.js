//=====================Task1==========================

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, 
// який містить
// назву продукту,
//  кількість 
//  і куплений він чи ні, 
//  ціну за одиницю товару, 
//  Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані,
// а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// Створення списку (не) придбаних продуктів.

const shoppingList = [
  {
    productName: 'tomatoes',
    quantity: 4,
    bought: false,
    unitPrice: 5,
  },
  {
    productName: 'apples',
    quantity: 2,
    bought: true,
    unitPrice: 3,
  },
  {
    productName: 'bananas',
    quantity: 10,
    bought: false,
    unitPrice: 6,
  },



]
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function buyProduct(arr, nameOfProduct) {

  for (i = 0; i < arr.length; i++) {
    if (arr[i].productName === nameOfProduct) {
      if (arr[i].bought === false) {
        arr[i].bought = true;
        break;
      }
    }
  }
}
buyProduct(shoppingList, 'apples');
console.log(shoppingList);

// Створення списку (не) придбаних продуктів.
function showUnbought(arr) {
  let unboughtProduct = arr.filter(unbought => unbought.bought === false);
  let print = '';
  for (i = 0; i < unboughtProduct.length; i++) {
    print = print + '' + unboughtProduct[i].productName + ' ' + unboughtProduct[i].quantity + '\n';
  }
  return print;
}
console.log(showUnbought(shoppingList));

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// (Робота функції що виводить список непридбаних продуктів спочатку, роботу робимо над копією ісходного масиву.)

let shoppingListForWork = shoppingList.slice()
function compareProduct(arr) {
  arr.sort(function (left, right) {
    return (left.bought - right.bought);
  })
}
compareProduct(shoppingListForWork);
console.log(shoppingListForWork);

