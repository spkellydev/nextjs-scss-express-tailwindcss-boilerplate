import React, { Component } from "react";
import Editor from "react-pell";

class PellEditor extends Component {
  state = {
    content: undefined
  };

  handleChange = html => {
    this.setState({
      content: html
    });
  };

  render() {
    return (
      <div>
        <Editor
          onChange={this.handleChange.bind(this)}
          defaultContent={this.state.content}
        />
      </div>
    );
  }
}

export default PellEditor;
