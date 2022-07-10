const input = document.querySelector('input');
const span = document.querySelector('#name-output');

const dataOutput = () => {

    input.value !== '' ? span.textContent = input.value : span.textContent = 'Anonymous'

}

input.addEventListener('input', dataOutput)