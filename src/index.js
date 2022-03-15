import { getWeather } from "./weather.js";

let inputCity = document.getElementById("city");
let submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", (e) => searchCity(e));

const searchCity = (e) => {
  console.log(inputCity.value);
  e.preventDefault();
};

getWeather();
