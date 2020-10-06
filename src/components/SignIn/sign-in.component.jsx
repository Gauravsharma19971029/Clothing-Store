import React ,{useState} from "react";
import "./sign-in.styles.scss";
import FormInput from "../Form-Input/form-input.component";
import CustomButton from "../CustomButton/custom-button.component";
import {connect} from 'react-redux'
import {googleSigninStart,emailSigninStart} from '../../redux/user/user.action'



const SignIn = ({emailSigninStart,googleSigninStart}) => {

  const [userCredentials,setUserCredentials] = useState({email: "", password: ""})
  const { email, password } = userCredentials;

 const  handleSubmit = async (e) => {
    e.preventDefault();
    emailSigninStart(email,password)

  };

 const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({...userCredentials, [name]: value });
  };

    
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
            required
          ></FormInput>
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            required
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit"> Submit</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSigninStart}
              isGoogleSignIn
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }


const mapDispatchToProps = dispatch => ({
  googleSigninStart : () => dispatch(googleSigninStart()),
  emailSigninStart : (email,password) => dispatch(emailSigninStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
