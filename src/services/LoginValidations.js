import Validations from "./Validations"

export default class LoginValidations {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    checkValidations(){
        let errors = []
        // check email validation
        if(!Validations.checkEmail(this.email)){
            errors['email'] = 'Invalid Email'
        }

        // check password validation
        if(!Validations.minLength(this.password, 6)){
            errors['password'] = 'Password should be 6 or more characters'
        }
        return errors
    }
}