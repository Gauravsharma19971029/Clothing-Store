import React from 'react'
import './signIn-signUp.styles.scss'

import SignIn from '../../components/SignIn/sign-in.component'
import SignUp from '../../components/Sign-Up/sign-up.component'

const SignInAndSignUp = () =>
{
    return(
        <div className='sign-in-and-sign-up'> 
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default SignInAndSignUp