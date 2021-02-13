import React, { Component } from 'react';
import FormInput from '../../component/form-input/form-input.component';
import CustonButton from '../../component/custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss';

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target

         this.setState({[name] : value})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert('passwords does not match')
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

           await createUserProfileDocument(user, {displayName})

            this.setState({
              displayName: "",
              email: "",
              password: "",
              confirmPassword: "",
            });

        }catch(error){ 
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode == "auth/weak-password") {
              alert("The password is too weak.");
            } else {
              alert(errorMessage);
            }
        }
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
          <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with email and password</span>

            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                handleChange={this.handleChange}
                label="Display Name"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                handleChange={this.handleChange}
                label="Email"
                required
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                handleChange={this.handleChange}
                label="Password"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                handleChange={this.handleChange}
                label="Confirm Password,"
                required
              />
              <CustonButton type="submit">SIGN UP</CustonButton> 
            </form>
          </div>
        );
    }
}


export default SignUp;
