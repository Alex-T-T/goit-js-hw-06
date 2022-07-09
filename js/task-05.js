const input = document.querySelector('input');
console.log(input);
const span = document.querySelector('#name-output');
console.log(span);

const dataOutput = (event) => {

    event.currentTarget.value !== '' ? span.textContent = event.currentTarget.value : span.textContent = 'Anonymous'

    // if (event.currentTarget.value !== '') {
    //     return span.textContent = event.currentTarget.value
    // }
    // else {
    //     return span.textContent = 'Anonymous'
    // }
}

input.addEventListener('input', dataOutput)