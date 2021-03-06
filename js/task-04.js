// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика.
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса.


let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrement => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  console.log(counterValue);
});

incrementBtn.addEventListener('click', onIncrement =>{
  counterValue += 1;
  valueEl.textContent = counterValue;
  console.log(counterValue);
});
