import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahr(event) {
    event.preventDefault();
    setUnit("fahreheit");
  }
  function convertToCels(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C/{" "}
          <a href="" onClick={convertToFahr}>
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let fahreheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahreheit)}</span>
        <span className="units">
          <a href="" onClick={convertToCels}>
            °C
          </a>{" "}
          / °F{" "}
        </span>
      </div>
    );
  }
}
