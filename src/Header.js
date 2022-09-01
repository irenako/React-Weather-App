import React from "react";
import "./App.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <header>
      <h1>Weather Forecast</h1>
      <img src={logo} alt="Logo" className="logo" />;
    </header>
  );
}
