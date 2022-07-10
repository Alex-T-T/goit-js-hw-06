const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');
const email = inputs[0];
const password = inputs[1];

const getInfo = (event) => {
    event.preventDefault();
    const infoBox = {
        email: email.value,
        password: password.value,
    };

     if (email.value === '' || password.value === '') {
        alert('Додайте дані в порожні поля: email/password');
    } 
    // if (email.value === '') {
    //     alert('Додайте дані в поле email');
    // } 

    //  if (password.value === '') {
    //     alert('Будь-ласка, заповніть пусте поле password');
    // } 

    console.log(infoBox);
    form.reset();
};
    
form.addEventListener('submit', getInfo);









