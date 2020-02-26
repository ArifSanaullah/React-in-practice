import React, { Component } from "react";
import style from "./LogIn.module.css";
import Main from "../Main.component/Main.component";



export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      isFormValid: false,
      isActive: true,
      errors: {
        fullName: " ",
        password: " ",
        email: " "
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    const validEmailRegex = RegExp(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full name must be 5 characters long" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long." : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(() => {
      const isFormValid = this.validateForm(this.state.errors);
      return { isFormValid: isFormValid, isActive: !isFormValid }
    })
  }

  validateForm(errors) {
    return Object.values(errors).every(error => error.length === 0);
  }

  render() {
    // if (!this.state.isActive) return null;
    const { errors } = this.state;
    return (
      <div className="Main">
        <div className={style.wrapper}>
        <div className={style.form__wrapper}>
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className={style.fullName}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.fullName.length > 0 && (
                <span className={style.error}>{errors.fullName}</span>
              )}
            </div>
            <div className={style.email}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className={style.error}>{errors.email}</span>
              )}
            </div>
            <div className={style.password}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className={style.error}>{errors.password}</span>
              )}
            </div>
            <div className={style.info}>
              <small>Password must be eight characters in length.</small>
            </div>
            <div className={style.submit}>
              <button>Create</button>
            </div>
          </form>
        </div>
        </div>
        {this.state.isFormValid && <Main isActive={this.state.isFormValid} />}
      </div>
    );
  }
}

// export const isActive = this.state.isActive;