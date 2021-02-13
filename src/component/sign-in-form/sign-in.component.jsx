import React, { Component }from 'react';
import './sign-in.styles.scss';
import FormInput from '../../component/form-input/form-input.component';
import CustomButton from '../../component/custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component {
        constructor(props) {
            super(props);

            this.state = {
                email: "",
                password: ""
            }
        }
        
        handleChange = (e) => {
            const {value, name} = e.target

            this.setState({[name]: value}) 
        }

        handleSubmit = (e) =>{
            e.predefault()

            this.setState({email: "", password:""})
          }

    render(){
        const {email, password} = this.state
        return (
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                value={email}
                name="email"
                handleChange={this.handleChange}
                label="Email"
                required
              />

              <FormInput
                type="password"
                value={password}
                name="password"
                handleChange={this.handleChange}
                label="Password"
                required
              />
              <div className="custom-buttons">
                <CustomButton type="submit" value="submit">
                  Sign in
                </CustomButton>
                <CustomButton
                  value="submit"
                  onClick={signInWithGoogle}
                  isGoogleButton
                >
                  Sign in with Google
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;