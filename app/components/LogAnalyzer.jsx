import React, { Component } from 'react';

export default class LogTable extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      logs: this.props.logs
    })
  }

  render() {
    return (
      <section>
        <p>,</p>
      </section>
    )
  }
}