import React, { Component } from "react";

const CLIENT_ID = process.env.REACT_APP_STREAMY_CLIENT_ID;

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: CLIENT_ID,
        scope: "email",
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
