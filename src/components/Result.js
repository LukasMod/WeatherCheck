import React from "react";
import "./Result.css";

const Results = (props) => {
  const {
    err,
    city,
    date,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <>
        <h3>
          Wheater for <em>{city}</em>
        </h3>
        <div>City: {city}</div>
        <div>Date: {date}</div>
        <div>Temperature: {temp} &#176;C</div>
        <div>Sunrise: {sunriseTime}</div>
        <div>Sunset: {sunsetTime}</div>
        <div>Pressure: {pressure} hPa</div>
        <div>Wind speed: {wind} m/s</div>
      </>
    );
  }

  return (
    <div className="result">
      {err || { city } === "" ? `There is no such city: ${city}` : content}
    </div>
  );
};

export default Results;
