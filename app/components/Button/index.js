import React, { Component, Fragment } from "react";
import Link from "next/link";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick(e) {
    e.preventDefault();
    console.log("in file");
  }

  render() {
    return (
      <Fragment>
        <a
          onClick={e => this.handleButtonClick(e)}
          className={this.props.className}
        >
          {this.props.text}
        </a>
      </Fragment>
    );
  }
}
