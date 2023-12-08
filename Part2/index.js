const cardSuite = document.querySelector('#cardSuiteInput');
const cardColor = document.querySelector('#cardColorInput');

function setCard () {
    const card = document.querySelector(`#${cardSuite.value}`);
    card.style.color = ('color', cardColor.value);
}

const editButton = document.querySelector('#editButton');
editButton.addEventListener('click', setCard);