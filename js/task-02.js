const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ==========
//  for


// const list = document.querySelector('#ingredients')

// const createIngredient = (elements) => {
//   for (let i = 0; i < elements.length; i += 1) {
//     const ingredient = document.createElement('li')
//     ingredient.textContent = elements[i]
//     ingredient.classList.add('item')
//     list.append(ingredient)
//   }
// }


// createIngredient(ingredients)

// ==========
// ==========



// ==========
 // map

const list = document.querySelector('#ingredients')

const createIngredient = (elements) => elements.map(element => {

  const ingredient = document.createElement('li')
  ingredient.classList.add('item')
  ingredient.textContent = element
  
  return ingredient
});

const createdIngredient = createIngredient(ingredients)

list.append(...createdIngredient)

// ==========
// ==========
