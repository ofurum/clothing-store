import React from 'react';
import SignIn from '../../component/sign-in-form/sign-in.component';
import SignUp from '../../component/sign-up-form/sign-up.component'
import './sign-in.styles.scss';


const SignInSignUpPage = () => (
    <div className="sign-in-sign-up-page">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUpPage;