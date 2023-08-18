export class AdminLogin {
    adminLogin = process.env.VUE_APP_ADMIN_LOGIN;
    adminPassword = process.env.VUE_APP_ADMIN_PASSWORD;

    constructor (admin) {
        this.loginInput = admin.loginInput;
        this.passwordInput = admin.passwordInput;

        this.form = admin.form;
    }
    
    checkForMatchPasswords () {
        const loginValue = this.loginInput.value;
        const passwordValue = this.passwordInput.value;
        
        return this.adminLogin === loginValue && this.adminPassword === passwordValue ? true : false;
    }

    removeFormIfRightPassword (checkFunction) {
        if (checkFunction) {
            this.form.remove();
        }
        else {
            this.loginInput.value = '';
            this.loginInput.placeholder = 'Не правильный логин';

            this.passwordInput.value = '';
            this.passwordInput.placeholder = 'Не правильный пароль';
        }
    }
}