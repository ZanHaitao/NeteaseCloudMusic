import React from "react";
import Header from "../components/Header";
export default function index(props) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
    </div>
  );
}
