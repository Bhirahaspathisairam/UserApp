import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserID: "",
      message: "",
      error: "",
      isError: false,
      isMsg: false,
    };
  }
  handleRegistration = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/register", this.state)
      .then((response) => {
        console.log(response);
        this.setState({
          message: response.data.message,
          isMsg: true,
          isError: false,
        });
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({
          error: error.response.data.message,
          isMsg: false,
          isError: true,
        });
      });
  };

  onTodoChange(value) {
    this.setState({
      UserID: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleRegistration}>
        <h3>Sign Up</h3>
        {this.state.isMsg ? this.state.message : null}
        {this.state.isError ? this.state.error : null}

        <div className="form-group">
          <label>UserID</label>
          <input
            type="text"
            className="form-control"
            placeholder="UserID"
            value={this.state.name}
            onChange={(e) => this.onTodoChange(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Sign Up"
        />
        <p className="forgot-password text-right">
          Already Registered <Link to="/">Signin</Link>
        </p>
      </form>
    );
  }
}

export default SignUp;
