import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
    if (unit === "celsius") {
    return (
        <span className="WeatherTemperature">
        <span id="temperature">{Math.round(props.celsius)}</span>
                  <small className="weather-unit">
                    <a href="/" id="celcius-link" className="active">°C
                    </a>{" "}
                    |
                    <a href="/" id="farenheit-link" onClick={showFahrenheit}>
                      °F
                    </a>
                  </small>
        </span>
            );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return (
        <span className="WeatherTemperature">
        <span id="temperature">{Math.round(fahrenheit)}</span>
                  <small className="weather-unit">
                    <a href="/" id="celcius-link" onClick={showCelsius}>°C
                    </a>{" "}
                    |
                    <a href="/" id="farenheit-link" className="active">°F
                    </a>
                  </small>
        </span>
            );
    }
}