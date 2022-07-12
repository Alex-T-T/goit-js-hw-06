// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const input = document.querySelector('input'); 
// const create = document.querySelector('button[data-create]')
// const destroy = document.querySelector('button[data-destroy]')
// const boxes = document.querySelector('#boxes');


// const widthBox = '30px';
// const heightBox = '30px'; 

// const divEl = `<div class = 'onebox' width = '${widthBox}' height = '${heightBox}'></div>`;

// function createBoxes() {
 
//   boxes.insertAdjacentHTML('afterbegin', divEl);
// }

// // createDiv(boxes)
// function destroyBoxes() {
//   boxes.textContent = '';
// }


// const getInfo = (event) => {
//     event.preventDefault();
//   const amount = event.target.input.value;
//   console.log(amount);
//     if (amount === '') {
//         alert('Додайте дані в порожнє поле!');
//     } 

//     input.reset();
//     return;
// };

// input.addEventListener('submit', getInfo)
// create.addEventListener('click', createBoxes)
// destroy.addEventListener('click', destroyBoxes)