import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.prop = props;
  }

  render() {
    return (
      <section>
        <Head>
          <title>Hello World</title>
        </Head>

        <h1>Hello World from React</h1>
        <Link href="/about">About Page</Link>
      </section>
    );
  }
}

export default HelloWorld;
