//card number
const cardNumberInput = document.querySelector('.js--card-number-input');
const cardImageNumber = document.querySelector('.js--card-image-number');
cardNumberInput.addEventListener('input', function() {
    cardImageNumber.innerHTML = cardNumberInput.value;
});

//card name
const cardNameInput = document.querySelector('.js--card-name-input');
const cardImageHolder = document.querySelector('.js--card-image-holder');
cardNameInput.addEventListener('input', function() {
    cardImageHolder.innerHTML = cardNameInput.value;
});


