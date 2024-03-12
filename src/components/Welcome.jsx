import React from "react";
import { welcomeAlert } from "../js/welcomeAlert";

class Welcome extends React.Component {
  render() {
    return (window.onload = (event) => {
      welcomeAlert();
    });
  }
}

export default Welcome;
