function validateForm (formField) {
    formField.name.addEventListener('input', function () {
        let regEx = /^[a-zA-Z]+$/;
        if (!this.value.match(regEx)) {
            this.value = this.value.slice(0, 0); 
        };
        if (this.value.length >= 3) {
            this.value = this.value.slice(0, 10)
            document.querySelector('.js--card-image-holder').innerHTML = this.value;
        };
        checkFields();
    });
    formField.number.addEventListener('input', function () {
        let regEx = /^\d+$/;
        if (!this.value.match(regEx)) {
            this.value = this.value.slice(0, 0)
        };    
        if (this.value.length >= 16) {
            this.value = this.value.slice(0, 16);
            document.querySelector('.js--card-image-number').innerHTML = `${this.value.substring(0, 4)} ${this.value.substring(4, 8)} ${this.value.substring(8, 12)} ${this.value.substring(12, 16)}`;
        };
        checkFields();
    });
    formField.month.addEventListener('input', function () {
        document.querySelector('.js--month').innerHTML = this.value;
        checkFields();
    });
    formField.year.addEventListener('input', function ()  {
        document.querySelector('.js--year').innerHTML = this.value;
        checkFields();
    });
    formField.code.addEventListener('input', function () {
        if (this.value.length >= 3) {
            this.value = this.value.slice(0, 3);
        } else if(isNaN(+this.value)) {
            this.value = this.value.slice(0, 0);
        };
        checkFields();
    });
    formField.submit.addEventListener('click', () => {
        let user = new User;
        console.log(user);
    });
    function checkFields() {
        if (formField.number.value.length >= 16 &&  formField.name.value.length >= 3 &&  formField.month.value > 0 &&  formField.year.value > 0 &&  formField.code.value.length === 3) {
            formField.submit.disabled = false;
        } else {
            formField.submit.disabled = true;
        };
    };
    function User() {
        this.name = formField.name.value;
        this.number = formField.number.value;
        this.date = `${formField.month.value}/${formField.year.value}`;
        this.code = formField.code.value;
    };   
};
validateForm({
    name: document.querySelector('.js--card-name-input'),
    number: document.querySelector('.js--card-number-input'),
    month: document.querySelector('.js--month-selector'),
    year: document.querySelector('.js--year-selector'),
    code: document.querySelector('.js--code-input'),
    submit: document.querySelector('.submit-button'),
});