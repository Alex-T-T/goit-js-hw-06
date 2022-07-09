// 1. Find obj winth id = '#categories' in document => querySelector
// 2. Find all obj with class = '.item' in #categories => querySelectorAll
// 3. consol.log ('Number of categories:', const.length) 

//const categoriesRef = document.querySelector('#categories');

// 'use strict';

const categoriesList = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesList.length);

const titlesList = [...categoriesList].map(categories => `Category: ${categories.children[0].textContent} 
Elements: ${categories.children[1].children.length} `).join('\n');

console.log(titlesList);


