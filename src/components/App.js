import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  // handleCitySubmit = (e) => {
  //   e.preventDefault();
  //   const APIKey = "940db60953fdfb5ee0c73670f7365bca";
  //   const API = `https://api.openweathermap.org/data/2.5/weather?q=${
  //     this.state.value
  //   }&APPID=${APIKey}&units=metric`;

  //   fetch(API)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response;
  //       }
  //       throw Error("Something is not working");
  //     })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const time = new Date().toLocaleString();
  //       this.setState((prevState) => ({
  //         date: time,
  //         city: prevState.value,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //         err: false,
  //       }));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       this.setState((prevState) => ({ err: true, city: prevState.value }));
  //     });
  // };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      const APIKey = "940db60953fdfb5ee0c73670f7365bca";
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${
        this.state.value
      }&APPID=${APIKey}&units=metric`;

      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error("Something is not working");
        })
        .then((response) => response.json())
        .then((data) => {
          const time = new Date().toLocaleString();
          this.setState((prevState) => ({
            date: time,
            city: prevState.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            err: false,
          }));
        })
        .catch((err) => {
          console.log(err);
          this.setState((prevState) => ({ err: true, city: prevState.value }));
        });
    }
  }

  render() {
    return (
      <div className="app">
        <Form
          change={this.handleInputChange}
          value={this.state.value}
          // submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
        <br />
        <h3>Have a nice day</h3>
      </div>
    );
  }
}

export default App;
