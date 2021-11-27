/* let newParagraph = document.createElement('p');
newParagraph.innerText = 'New paragraph!';
document.body.appendChild(newParagraph);



let table = document.createElement('table');

for (let i = 0; i < 3; i++) {
  let tr = document.createElement('tr');

  for (let j = 0; j <= 5; j++) {
    let td = document.createElement('td');
    td.innerHTML = j;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

document.body.appendChild(table); */

window.onload = () => {
  const list = document.getElementById('list');

  for (let i = 0; i < 5; i++) {
    let li = document.createElement('li');
    li.innerText = `List item ${i + 1}`;
    list.appendChild(li);
  }
};

function selectFirstChild() {
  let list = document.getElementById('list');
  // Get the first child node from the list.
  let child = list.firstChild;
  if (child !== null) {
    // Add style attribute for the selected child node.
    child.style.color = 'red';
  }
}

function selectLastChild() {
  let list = document.getElementById('list');
  // Get the last child node from the list.
  let child = list.lastChild;
  if (child != null) {
    child.style.color = 'red';
  }
}

let node = null;

function selectNextNode() {
  resetColor();
  if (node == null) {
    let list = document.getElementById('list');
    node = list.firstChild;
    node.style.color = 'green';
    return;
  }
  // Получение следующего элемента, которые в дереве находиться на одном уровне.
  node = node.nextSibling;
  console.log(node);
  if (node != null) {
    node.style.color = 'green';
  }
}

function selectPrevNode() {
  resetColor();
  if (node == null) {
    let list = document.getElementById('list');
    node = list.lastChild;
    node.style.color = 'green';
    return;
  }
  // Получение предыдущего элемента, которые в дереве находиться на одном уровне.
  node = node.previousSibling;
  if (node != null) {
    node.style.color = 'green';
  }
}

function resetColor() {
  let liList = document.getElementsByTagName('li');
  for (let i = 0; i < liList.length; i++) {
    liList[i].setAttribute('style', 'color:black');
  }
}

function createNewChild() {
  let list = document.getElementById('list');
  // создание элемента li
  let item = document.createElement('li');
  item.innerHTML = 'NEW ITEM';
  // добавление созданного элемента в конце.
  list.appendChild(item);
}

function removeLastChild() {
  let list = document.getElementById('list');
  let item = list.lastChild;
  if (item != null) {
    // удаление выбранного элемента из дерева.
    list.removeChild(item);
  }
}

function createNewChildAtStart() {
  let list = document.getElementById('list');
  let item = document.createElement('li');
  item.innerHTML = 'NEW ITEM';
  if (list.firstChild != null) {
    // вставка элемента перед указанным элементом.
    list.insertBefore(item, list.firstChild);
  }
}