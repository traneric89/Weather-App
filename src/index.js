import { weatherRequest } from "./weather.js";
import { renderNewCity } from "./UI.js";

let weatherData = {};

let inputCity = document.getElementById("input-city");
let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", (e) => searchCity(e));
inputCity.addEventListener("keyup", (e) => searchCity(e));

const searchCity = (e) => {
  if (e.keyCode === 13 || e.type === "click") {
    e.preventDefault();
    getWeather(inputCity.value);
  }
};

const getWeather = async (city) => {
  try {
    const response = await weatherRequest(city);
    // console.log(response);
    weatherData = response;
    // console.log("weather Data:");
    console.log(weatherData);
    renderNewCity(weatherData);
  } catch (err) {
    console.log(err);
  }
};
