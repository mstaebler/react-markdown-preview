import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Textarea from "./Textarea";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Textarea />
      </div>
    );
  }
}
