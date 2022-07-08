const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');
const buttonMarvel = document.querySelector('.marvel');
const buttonDc = document.querySelector('.dc');

let game = '';

const chooseGame = (element) => {
    game = element.value;
    element.style.color = "#FFF"

    if (input.value.length >= 2 && input.value.length <= 10) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }

    if (game == "marvel") {
        element.style.backgroundColor = "rgb(120, 0, 0)"
        buttonDc.style.backgroundColor = "#eee"
        buttonDc.style.color = "#aaa"

    } else {
        element.style.backgroundColor = "#086DFF"
        buttonMarvel.style.backgroundColor = "#eee"
        buttonMarvel.style.color = "#aaa"
    }
}

const validateSubmit = (event) => {
    if (game != '' && event.target.value.length >= 2 && event.target.value.length <= 10) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('player', input.value);
    localStorage.setItem('game', game)
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateSubmit);
form.addEventListener('submit', handleSubmit);