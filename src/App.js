import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <Weather defaultCity="Oslo" />
      <footer>
        This project was coded by Iryna Koval and is{" "}
        <a
          href="https://github.com/irenako/online-react-weather-app-koval"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://weather-application-irenakoval.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
