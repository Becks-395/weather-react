import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <div className="row">
        <div className="col-6">
        <h1 id="city">{props.data.city}</h1>
        <ul>
            <li>
                Last updated: <span id="date">
                <FormattedDate date={props.data.date} />
                </span>
                <div id="description" className="text-capitalize">{props.data.description}</div>
            </li>
            <li>
                Humidity:{" "}
                <strong>
                    <span id="humidity">{props.data.humidity}</span>%
                </strong>
                    , Wind:{" "}
                <strong>
                    <span id="wind">{props.data.wind}</span>km/h
                </strong>
            </li>
        </ul>
        </div>
        <div className="col-6 current-temp">
                  <img src={props.data.iconUrl} alt={props.data.description} id="icon" />
                  <WeatherTemperature celsius={props.data.temperature}/>
        </div>
        </div>
    </div>
    )
}