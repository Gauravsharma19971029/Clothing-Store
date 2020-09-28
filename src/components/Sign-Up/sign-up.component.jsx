import React from "react";
import "./sign-up.component.scss";
import CustomButton from "../CustomButton/custom-button.component";
import FormInput from "../Form-Input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (e) =>
  {
      const { name,value} = e.target
      this.setState({[name]:value})
  }


  handleSubmit = async (e) =>
  {
      e.preventDefault();
      const{displayName,email,password,confirmPassword} = this.state;
      if(password !== confirmPassword)
      {
          alert("passwords don't match");
          return;
      }
      try{
        const {user}  = await auth.createUserWithEmailAndPassword(email,password);
        await createUserProfileDocument(user,{displayName});
        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          })
      }
      catch(error)
      {
        console.error(error);
      }

  }

  render() {

    const{displayName,email,password,confirmPassword} = this.state;

    return (
      <div className="sign-up">
        <h2 className="title"> I don't have a account </h2>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput label='Display Name' type='text' name='displayName'  value ={displayName} onChange={this.handleChange} required></FormInput>
          <FormInput label='Email'  type='email' name='email'  value ={email} onChange={this.handleChange} required></FormInput>
          <FormInput label='Password'  type='password' name='password'  value ={password} onChange={this.handleChange} required></FormInput>
          <FormInput label='Confirm Password'  type='password' name='confirmPassword'  value ={confirmPassword} onChange={this.handleChange} required></FormInput>  

          <CustomButton type="submit"> SignUp</CustomButton> 
        </form>
      </div>
    );
  }
}

export default SignUp
