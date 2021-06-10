import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        })
    }

    function search() {
        const apiKey = "306b2c7792e2f4d64e57a44d766b9a83";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(); 
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
          <div className="Weather">
            <div className="weather-info">
                <WeatherInfo data={weatherData}/>
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control search-input"
                    id="city-input"
                    autoComplete="off"
                    onChange={handleCityChange}
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
         </div>
  );
    }
    else {
        search()
        return "Loading...";
    }
}