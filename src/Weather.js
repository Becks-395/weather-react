import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            date: "Today",
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        })
    }

    if (weatherData.ready) {
        return (
          <div className="Weather">
            <div className="weather-info">
              <div className="row">
                <div className="col-6">
                  <h1 id="city">{weatherData.city}</h1>
                  <ul>
                    <li>
                      Last updated: <span id="date">{weatherData.date}</span>,{" "}
                      <span id="description" className="text-capitalize">{weatherData.description}</span>
                    </li>
                    <li>
                      Humidity:{" "}
                      <strong>
                        <span id="humidity">{weatherData.humidity}</span>%
                      </strong>
                      , Wind:{" "}
                      <strong>
                        <span id="wind">{weatherData.wind}</span>km/h
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className="col-6 current-temp">
                  <img src={weatherData.iconUrl} alt={weatherData.description} id="icon" />
                  <span id="temperature"></span>
                  <small className="weather-unit">
                    <a href="#" id="celcius-link" className="active">
                      {Math.round(weatherData.temperature)}°C
                    </a>{" "}
                    |
                    <a href="#" id="farenheit-link">
                      °F
                    </a>
                  </small>
                </div>
              </div>
            </div>
            <form id="search-form">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control search-input"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    className="btn btn-primary w-100"
                    value="Search"
                  />
                </div>
              </div>
            </form>
            <div className="weather-forecast" id="forecast"></div>
          </div>
  );
    }
    else {
        const apiKey = "306b2c7792e2f4d64e57a44d766b9a83";
        let city = "New York";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}