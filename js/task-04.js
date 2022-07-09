const value = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
let counterValue = 0



const plusValue = () => {
    counterValue += 1;
    value.textContent = counterValue;
};
const minusValue = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}; 


btnDecrement.addEventListener('click', minusValue);
btnIncrement.addEventListener('click', plusValue);

