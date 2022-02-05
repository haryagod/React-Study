import { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

//extend with state {data:{},errors:{}}
//callServer() method

class Form extends Component {
  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;

    for (let item of error.details)
      this.state.errors[item.path[0]] = item.message;
    return this.state.errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    data[input.name] = input.value;
    const errorMessage = this.validatePorperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else delete errors[input.name];
    this.setState({ data, errors: errors || {} });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.callServer();
  };

  validatePorperty({ name, value }) {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema, {
      abortEarly: true,
    });
    if (!error) {
      return null;
    }
    return error.details[0].message;
  }
  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        onClick={this.handleLogin}
        className="btn btn-primary m-4"
      >
        {label}
      </button>
    );
  }
  renderInput(Attname, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={Attname}
        type={type}
        onValueChange={this.handleChange}
        label={label}
        value={data[Attname]}
        error={errors[Attname]}
      />
    );
  }
}

export default Form;
