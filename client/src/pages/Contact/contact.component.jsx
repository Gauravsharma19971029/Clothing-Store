import React from "react";
import "./contact.component.scss";
import FormInput from "../../components/Form-Input/form-input.component";
import CustomButton from "../../components/CustomButton/custom-button.component";
import axios from "axios";

class ContactPage extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked")
    const { name, phone, email, message } = this.state;
    axios({
      url: "contact",
      method: "post",
      data: {
        name,
        phone,
        email,
        message,
      },
    })
      .then((response) =>{ console.log("Response",response); alert("Query Received")})
      .catch((error) => {
        console.log("error", error);
        alert("Something went wrong");
      });
  };

  render() {
    const { name, phone, email, message } = this.state;
    return (
      <div>
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <FormInput
            placeholder="Name*"
            type="text"
            name="name"
            value={name}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            placeholder="Email*"
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            placeholder="Phone Number*"
            type="number"
            name="phone"
            value={phone}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            placeholder="Your Message*"
            type="text"
            name="message"
            value={message}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <CustomButton type="submit"> Send</CustomButton>
        </form>
      </div>
    );
  }
}

export default ContactPage;
