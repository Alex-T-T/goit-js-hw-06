const input = document.querySelector('#validation-input')
const length = parseInt(input.getAttribute('data-length'))


const validationFunc = (event) => {

       
    if (event.currentTarget.value.length === length) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        input.classList.add('invalid')
        input.classList.remove('valid')
        
    }

}
input.addEventListener('blur', validationFunc);

// // ========= Рішення ==========
// input.onfocus = (event) => input.classList.remove('valid', 'invalid');
// input.onblur = (event) => {
//     if ( event.currentTarget.value.length === length) {
//           input.classList.add('valid');
//     }
//     else {
//          input.classList.add('invalid');
//     }
// }
// // =============================

// // ========== Example ==========
// input.onfocus = (event) => input.classList.remove('valid', 'invalid');
// input.onblur = (event) => {
//     if ( input.value.includes('r')) {
//           input.classList.add('valid');
//     }
//     else {
//          input.classList.add('invalid');
//     }
// }
// // =============================
