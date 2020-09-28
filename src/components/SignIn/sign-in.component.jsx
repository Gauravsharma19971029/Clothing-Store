import React from 'react'
import './sign-in.styles.scss'
import FormInput  from '../Form-Input/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'

import {auth , SignInWithGoogle} from '../../firebase/firebase.utils'

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

    handleSubmit = async (e) =>
    {
        e.preventDefault();
const{email,password} = this.state;
try{
    await auth.signInWithEmailAndPassword(email,password);
    this.setState({
        email:'',
        password:''

    })
}
catch(error)
{
    console.log("Error in Signing in "+error)
}

        
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
                    <CustomButton type="button" onClick = {SignInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
                    </div>
            </form>

            </div>

            
        )
    }

    
}

export default SignIn