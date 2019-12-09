class Valid {
    constructor(email, password, isValid = false) {
        this.email = email;
        this.password = password;
        this.isValid = isValid;
    }
    validate() {
        
        document.querySelector('.out-7').innerHTML = `<div>
            <input placeholder="mail" value="${this.email}" class="mail"/>
            <input placeholder="password" value="${this.password}" class="pass"/>
        </div>`
        
        let pas = document.querySelector('.pass');
        let p = pas.value;

        if (p.length > 6) {
            this.isValid = true
        } else if (p.length < 6) {
            this.isValid = false
        }
        console.log();
    }
}
class Valid2 extends Valid {
    constructor(email, password, isValid = false, emaiError, passwordError) {
        super(email, password, isValid);
        this.emaiError = emaiError;
        this.passwordError = passwordError;
    }
    validate() {
        document.querySelector('.out-7').innerHTML = `<div>
            <input placeholder="mail" value="${this.email}" class="mail"/>
            <input placeholder="password" value="${this.password}" class="pass"/>
            <p>"${this.emaiError}"</p>
            <p>"${this.passwordError}"</p>
        </div>`
        let mail = document.querySelector('.mail');
        let pas = document.querySelector('.pass');
        let m = mail.value;
        let p = pas.value;

        if (p.length > 6) {
            this.isValid = true
        } else if (p.length < 6) {
            this.isValid = false
        }
        if (m.length == '') {
            this.emaiError = 'email empty';
            this.passwordError = 'min length 6';
        }
    }
}