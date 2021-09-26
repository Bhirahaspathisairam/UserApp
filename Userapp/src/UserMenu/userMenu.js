import React from "react";
import axios from "axios";
import JobChart from "../chart/JobChart";

class UserMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      chartDetails: [],
    };
  }

  handleUserDetails = () => {
    const userID = localStorage.getItem("userId");
    console.log(userID);
    axios
      .post("http://localhost:4000/api/v1/user", { user: userID })
      .then(() => {
        axios
          .get("http://localhost:4000/api/v1/jobDetails/")
          .then((response) => {
            console.log(response);
            this.setState({
              chartDetails: response.data.details,
            });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { chartDetails } = this.state;
    return (
      <div>
        <h3>UserMenu</h3>
        {this.state.message}
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Fetch Details"
          onClick={this.handleUserDetails}
        />
        {chartDetails.length > 0 && (
          <JobChart details={this.state.chartDetails}></JobChart>
        )}
      </div>
    );
  }
}
export default UserMenu;
