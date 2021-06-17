// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
// элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categoriesEl = document.querySelector ('#categories');
// console.log(categoriesEl);
// console.log(amountCategories);
const amountCategories = categoriesEl.children;
console.log(`В списке ${amountCategories.length} категории.`);


const newArr = [...amountCategories];
// console.log(newArr);
newArr.forEach(item => {
  const titleEl = item.querySelector('h2')
  console.log(`Категория: ${titleEl.textContent}`)
  const countList = item.querySelector('ul');
  const countListEl = countList.children;
  console.log(`Количество элементов: ${countListEl.length}`);
});