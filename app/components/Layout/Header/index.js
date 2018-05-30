import React, { Component } from "react";
import Link from "next/link";

const Header = () => (
  <header className="navbar">
    <section className="navbar-section">
      <Link href="/blog">
        <a className="navbar-brand mr-2">Blog</a>
      </Link>
      <Link href="/logs">
        <a className="navbar-brand mr-2">Logs</a>
      </Link>
    </section>
    <section className="navbar-section">
      <div className="input-group input-inline">
        <input className="form-input" type="text" placeholder="search" />
        <button className="btn btn-primary input-group-btn">Search</button>
      </div>
    </section>
  </header>
);

export default Header;
