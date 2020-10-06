import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-up.component.scss";
import CustomButton from "../CustomButton/custom-button.component";
import FormInput from "../Form-Input/form-input.component";
import { signUpStart } from "../../redux/user/user.action";

const SignUp = ({ signUpStart }) => {
  const [userDetails, setUserDetails] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart(email, password, displayName);
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I don't have a account </h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        ></FormInput>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        ></FormInput>
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        ></FormInput>

        <CustomButton type="submit"> SignUp</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
