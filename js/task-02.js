// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст 
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = ingredients.map(element => {
  const addElem = document.createElement('li');
  addElem.textContent = element;
  return addElem;
});
const ingredientsNode = document.querySelector('#ingredients');
ingredientsNode.append(...listEl);
console.log(ingredientsNode);
