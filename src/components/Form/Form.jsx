import React, { Component } from "react";
import "./form.css";
import { Link } from "react-router-dom";

const emailValidator = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = new RegExp("(?=.*[0-9])(?=.{6,})");

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      changeTab: false,
      showPassword: false,
      isFormSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
      this
    );
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    return;
  }

  handleBlur(event) {
    const { name } = event.target;
    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = ["emailAddress", "password", "passwordConfirmation"];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });
    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "password") isValid = this.validatePassword();
    else if (name === "passwordConfirmation")
      isValid = this.validatePasswordConfirmation();
    return isValid;
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim() === "") emailAddressError = "Este campo es requerido";
    else if (!emailValidator.test(value))
      emailAddressError = "Debe de ser un email v??lido";

    this.setState({
      emailAddressError,
    });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim() === "") passwordError = "Este campo es requerido";
    else if (!passwordValidator.test(value))
      passwordError = "Debe contener al menos 6 caracteres y 1 n??mero";

    this.setState({
      passwordError,
    });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    const value = this.state.passwordConfirmationError;
    if (this.state.password !== this.state.passwordConfirmation)
      passwordConfirmationError = "Las contrase??as no coinciden";
    if (value.trim() === "")
      passwordConfirmationError = "Este campo es requerido";

    this.setState({
      passwordConfirmationError,
    });
    return passwordConfirmationError === "";
  }

  loginClick = () => {
    this.setState({
      changeTab: this.setState.changeTab = false
    })
  }

  registerClick = () => {
    this.setState({
      changeTab: this.setState.changeTab = true
    })
  }

  render() {
    return (
      <div>
        
        <div className="buttonHome_content">
          <Link to={"/"} className="buttonToHome">
            <div className="arrow">
              <i className="bx bx-left-arrow-alt arrow_icon"></i>
            </div>
          </Link>
        </div>

        <div className="container_form">
          <div className="tile_form">

            <div className="button_content">
              <div id="btn" style={this.state.changeTab ? { left: "50%" } : { left: "" }}></div>
              <button onClick={this.loginClick} className="toggle-btn"> Inicia Sesi??n </button>
              <button onClick={this.registerClick} className="toggle-btn"> Reg??strate </button>
            </div>

            {/* FORM LOGIN */}

            <div className="form_content">
            <form onSubmit={this.handleSubmit} id="login" style={this.state.changeTab ? { display: "none" } : { display: "block" }}>

                <div className="center_text">
                  <h1 className="titles_form">??Bienvenido de vuelta!</h1>
                  <p className="texts_form">Entra a tu cuenta</p>
                </div>

                <div className="content_inputs">
                  <div className="input_group">
                    <span className="icon">
                      <i className="bx bx-envelope"></i>
                    </span>
                    <input
                      className={`input_field ${this.state.emailAddressError &&
                        "error"}`}
                      type="email"
                      placeholder="Email"
                      name="emailAddress"
                      value={this.state.emailAddress}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                      autoComplete="off"
                    />
                    {this.state.emailAddressError && (
                      <div className="errorMsg">
                        {this.state.emailAddressError}
                      </div>
                    )}
                  </div>

                  <div className="input_group">
                    <i className="bx bxs-key icon"></i>
                    <input
                      className={`input_field ${this.state.passwordError &&
                        "error"}`}
                      type={this.state.showPassword ? "text" : "password"}
                      placeholder="Contrase??a"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      onBlur={this.handleBlur}
                      autoComplete="off"
                    />
                    {this.state.passwordError && (
                      <div className="errorMsg">{this.state.passwordError}</div>
                    )}
                  </div>

                  <label  htmlFor="">
                    <input
                      className="check_separation"
                      type="checkbox"
                      onClick={() =>
                        this.setState({ showPassword: !this.state.showPassword })
                      }
                    />
                    Mostrar Contrase??a
                  </label>
                  
                  <a href="google.com" className="password_link">??Olvidaste tu contrase??a?</a>

                  <button className="submit-btn" type="submit">
                    Iniciar Sesi??n
                  </button>
                </div>
                
            </form>

                 {/* FORM REGISTER */}

                 <form
              style={this.state.changeTab ? { display: "block" } : { display: "none" }}
              onSubmit={this.handleSubmit}
              className="form"
              id="register"
            >
              <div className="center_text">
                <h1 className="titles_form">Reg??strate</h1>
                <p className="texts_form">Registra tu entidad</p>
              </div>

              <div className="content_inputs">
                <div className="input_group">
                  <i className="bx bx-envelope icon"></i>
                  <input
                    className={`input_field ${this.state.emailAddressError &&
                      "error"}`}
                    type="email"
                    placeholder="Email"
                    name="emailAddress"
                    value={this.state.emailAddress}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    autoComplete="off"
                  />
                  {this.state.emailAddressError && (
                    <div className="errorMsg">
                      {this.state.emailAddressError}
                    </div>
                  )}
                </div>

                <div className="input_group">
                  <i className="bx bxs-key icon"></i>
                  <input
                    className={`input_field ${this.state.passwordError &&
                      "error"}`}
                    type={this.state.showPassword ? "text" : "password"}
                    placeholder="Contrase??a"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    autoComplete="off"
                  />
                  {this.state.passwordError && (
                    <div className="errorMsg">{this.state.passwordError}</div>
                  )}
                </div>

                <div className="input_group">
                  <i className="bx bxs-key icon"></i>
                  <input
                    className={`input_field ${this.state
                      .passwordConfirmationError && "error"}`}
                    type={this.state.showPassword ? "text" : "password"}
                    placeholder="Confirmar contrase??a"
                    name="passwordConfirmation"
                    value={this.state.passwordConfirmation}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    autoComplete="off"
                  />
                  {this.state.passwordConfirmationError && (
                    <div className="errorMsg">
                      {this.state.passwordConfirmationError}
                    </div>
                  )}
                </div>

                <label htmlFor="">
                  <input
                    className="check_separation"
                    type="checkbox"
                    onClick={() =>
                      this.setState({ showPassword: !this.state.showPassword })
                    }
                  />
                  Mostrar Contrase??a
                </label>

                <label className="formulario_label">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="check_separation"
                    required
                  />
                  Aceptar los <a href="google.com" className="conditions_link">t??rminos y condiciones</a>
                </label>

                <button className="submit-btn" type="submit">
                  Reg??strate
                </button>
              </div>
            </form>
            </div>

       
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
