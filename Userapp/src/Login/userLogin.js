import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";
import AuthContext from "../context/AuthContext";

class userLogin extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      error: "",
    };
  }

  onInputChange(value) {
    this.setState({
      userId: value,
    });
  }

  handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/login", { user: this.state.userId })
      .then((response) => {
        this.context.setLoginStatus(response.data.userId);
        this.props.history.push(`/report`);
      })
      .catch((error) => {
        this.setState({ error: error.response.data.message });
      });
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleLogin}>
          <h3>Sign In</h3>
          {this.state.error ? this.state.error : null}
          <div className="form-group">
            <label>UserID</label>
            <input
              type="ID"
              className="form-control"
              placeholder="Enter UserID"
              value={this.state.name}
              onChange={(e) => this.onInputChange(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Login"
          />
          <p className="forgot-password text-right">
            Create Account <Link to="/signup">sign up</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default userLogin;
