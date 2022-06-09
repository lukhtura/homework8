//card number
const cardNumberInput = document.querySelector('.js--card-number-input');
const cardImageNumber = document.querySelector('.js--card-image-number');

function User() {
    this.name = cardNameInput.value;
    this.number = cardNumberInput.value;
    this.date = `${cardMonthInput.value}/${cardYearInput.value}`;
    this.code = codeInput.value;
}

cardNumberInput.addEventListener('input', function () {
    if (this.value.length >= 16) {
        this.value = this.value.slice(0, 16);
        cardImageNumber.innerHTML = `${this.value.substring(0, 4)} ${this.value.substring(4, 8)} ${this.value.substring(8, 12)} ${this.value.substring(12, 16)}`;
        checkField();
    }
    checkField();
});

//card name
const cardNameInput = document.querySelector('.js--card-name-input');
const cardImageHolder = document.querySelector('.js--card-image-holder');

cardNameInput.addEventListener('input', function () {
    if (this.value.length >= 3) {
        this.value = this.value.slice(0, 10)
        cardImageHolder.innerHTML = this.value;
        checkField();
    }
    checkField();
});

//expiration date
//month
const cardMonthInput = document.querySelector('.js--month-selector');
const cardMonthImage = document.querySelector('.js--month');

cardMonthInput.addEventListener('input', () => {
    cardMonthImage.innerHTML = cardMonthInput.value;
    checkField();
});
//year
const cardYearInput = document.querySelector('.js--year-selector');
const cardYearImage = document.querySelector('.js--year');

cardYearInput.addEventListener('input', () => {
    cardYearImage.innerHTML = cardYearInput.value;
    checkField();
});

//cvv
const codeInput = document.querySelector('.js--code-input');
codeInput.addEventListener('input', function () {
    if (this.value.length >= 3) {
        this.value = this.value.slice(0, 3);
        checkField();
    } else if(isNaN(+this.value)) {
        this.value = this.value.slice(0, 0);
    };
    checkField();
});

//submit button
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
    let user = new User;
    console.log(user);
});

//checkField
function checkField() {
    if (cardNumberInput.value.length >= 16 && cardNameInput.value.length >= 3 && cardMonthInput.value > 0 && cardYearInput.value > 0 && codeInput.value.length > 2) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};
