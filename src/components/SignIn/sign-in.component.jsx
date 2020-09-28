import React from 'react'
import './sign-in.styles.scss'
import FormInput  from '../Form-Input/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'

import {SignInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            email:'',
            password:''
    
        }
    }

    handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = (e) =>
    {
        const { name,value} = e.target
        this.setState({[name]:value})
    }

    render()
    {
        return(
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with email and password</span>

            <form onSubmit = {this.handleSubmit}>
                
                <FormInput label="Email" type='email' name = 'email' value ={this.state.email} handleChange = {this.handleChange} required></FormInput>
                <FormInput label="Password"  type='password' name = 'password' value ={this.state.password} handleChange = {this.handleChange} required></FormInput>
                   <div className="buttons">
                    <CustomButton type="submit"> Submit</CustomButton>
                    <CustomButton onClick = {SignInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
                    </div>
            </form>

            </div>

            
        )
    }

    
}

export default SignIn