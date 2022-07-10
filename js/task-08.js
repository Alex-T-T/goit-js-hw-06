const form = document.querySelector('.login-form');
const email = form.elements[0];
const password = form.elements[1];

const getInfo = (event) => {
    event.preventDefault();
    const infoBox = {
        email: email.value,
        password: password.value,
    };

    if (email.value === '' || password.value === '') {
        alert('Додайте дані в порожні поля: email/password');
    } 

    console.log(infoBox);
    form.reset();
};
    
form.addEventListener('submit', getInfo);









