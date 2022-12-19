const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientListEl = document.querySelector('#ingredients')

const ingredientsElArray = [];

for (let element of ingredients) {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = element;
  ingredientEl.classList.add('item');
  ingredientsElArray.push(ingredientEl)
}
ingredientListEl.append(...ingredientsElArray);

console.log(ingredientListEl);
