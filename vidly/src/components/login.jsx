import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi-browser";
class Login extends Form {
  state = { data: { userName: "", password: "" }, errors: {} };
  schema = {
    userName: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
  };
  componentDidMount() {}
  callServer() {
    //calling the server
    console.log("login");
  }

  render() {
    return (
      <div>
        <form>
          {this.renderInput("userName", "UserName")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("login")}
        </form>
      </div>
    );
  }
}

export default Login;
