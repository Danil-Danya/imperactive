export class Validator {
    constructor (validator) {
        this.name = validator.name;
        this.lastName = validator.lastName;

        this.phone = validator.phone;
        this.email = validator.email;

        this.text = validator.text;
    }

    validateName () {
        const value = this.name.value;

        if (value === '') {
            this.name.style.border = '3px solid red';
            this.name.placeholder = 'У вас пустое поле';

            return false;
        }
        else if (value.length > 12) {
            this.name.style.border = '3px solid red';
            this.name.value = '';
            this.name.placeholder = 'Слишком длинное имя';

            return false;
        }
        else {
            return true;
        }
    }

    validateLastName () {
        const value = this.lastName.value;

        if (value === '') {
            this.lastName.style.border = '3px solid red';
            this.lastName.placeholder = 'У вас пустое поле';

            return false;
        }
        else if (value.length > 12) {
            this.lastName.style.border = '3px solid red';
            this.lastName.value = '';
            this.lastName.placeholder = 'Слишком длинная фамилия';

            return false;
        }
        else {
            return true;
        }
    }    

    validatePhone () {
        const value = this.phone.value.toString();

        if (value === '') {
            this.phone.style.border = '3px solid red';
            this.phone.placeholder = 'У вас пустое поле';

            return false;
        }
        else if (value.length > 13 || value.length < 11) {
            this.phone.style.border = '3px solid red';
            this.phone.value = '';
            this.phone.placeholder = 'Такого телефона не существует';

            return false;
        }
        else {
            return true;
        }
    }    

    validateEmail () {
        const state = [];
        const value = this.email.value;

        for (let i = 0; i < value.length; i++) {
            if (value[i] === '.') {
                state.push('having')
            }
            if (value[i] === '@') {
                state.push('having')
            }
        }

        if (value === '') {
            this.email.style.border = '3px solid red';
            this.email.placeholder = 'У вас пустое поле';

            return false;
        }
        else if (state.length < 2){
            this.email.style.border = '3px solid red';
            this.email.value = '';
            this.email.placeholder = 'Email обязательно содердит символы как "@",".';

            return false
        }
        else {
            return true
        }
    } 

    validateText () {
        const value = this.text.value;

        if (value === '') {
            this.text.style.border = '3px solid red';
            this.text.placecholder = 'У вас пустое поле';

            return false;
        }
        else if (value.length > 500) {
            this.text.style.border = '3px solid red';
            this.text.value = '';
            this.text.placeholder = 'Слишком длинный текст';

            return false;
        }
        else if (this.text.value.length < 100) {
            this.text.style.border = '3px solid red';
            this.text.value = '';
            this.text.placeholder = 'Слишком короткий текст';

            return false;
        }
        else {
            return true;
        }
    } 

    allValidate () {
        const arrayState = [];

        const arrayInputMethods = [
            this.validateName(),
            this.validateLastName(),
            this.validatePhone(),
            this.validateEmail(),
            this.validateText()
        ];

        for (let i = 0; i < arrayInputMethods.length; i++) {
            if (arrayInputMethods[i] === true) {
                arrayState.push(true);
            }
        }

        if (arrayState.length >= 5) return true;
        else return false;
    }
}