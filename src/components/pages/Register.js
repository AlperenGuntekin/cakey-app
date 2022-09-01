import React, { useState } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Register = () => {
  // React States

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info

  const database = [
    {
      username: "user1",
      mail: "user1@gmail.com",
      tel: "0505505505",
      password: "pass1",
    },
    {
      username: "user2",
      mail: "user2@gmail.com",
      tel: "0505505505",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3>Hesap Oluştur</h3>
        <div>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-2"> 
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`İş Arayan`}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`İşe Alım Uzmanı`}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Ziyaretçi`}
                />
              </div>
            ))}
          </Form>
        </div>
        <div className="input-container">
          <label>İsim Soyisim </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>E-Mail </label>
          <input type="text" name="mail" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Cep Telefonu </label>
          <input type="text" name="tel" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Şifre </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ?
        <Link to="/">Giriş Yap</Link>
         : renderForm}
      </div>
    </div>
  );
};

export default Register;
