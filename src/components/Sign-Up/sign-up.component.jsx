import React from "react";
import {connect} from 'react-redux'
import "./sign-up.component.scss";
import CustomButton from "../CustomButton/custom-button.component";
import FormInput from "../Form-Input/form-input.component";
import {signUpStart} from '../../redux/user/user.action'

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
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    const {signUpStart} = this.props;
    
    signUpStart(email,password,displayName);
   
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title"> I don't have a account </h2>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          ></FormInput>

          <CustomButton type="submit"> SignUp</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    signUpStart : (email,password,displayName) => dispatch(signUpStart({email,password,displayName}))
  }
)


export default connect(null,mapDispatchToProps)(SignUp);
