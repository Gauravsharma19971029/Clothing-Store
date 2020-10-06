import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../Form-Input/form-input.component";
import CustomButton from "../CustomButton/custom-button.component";
import {connect} from 'react-redux'
import {googleSigninStart,emailSigninStart} from '../../redux/user/user.action'

import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const {emailSigninStart} = this.props
    emailSigninStart(email,password)
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({
    //     email: "",
    //     password: "",
    //   });
    // } catch (error) {
    //   console.log("Error in Signing in " + error);
    // }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {googleSigninStart} = this.props;
    
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit"> Submit</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSigninStart}
              isGoogleSignIn
            >
              {" "}
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSigninStart : () => dispatch(googleSigninStart()),
  emailSigninStart : (email,password) => dispatch(emailSigninStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
