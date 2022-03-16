import { weatherRequest } from "./weather.js";

let inputCity = document.getElementById("city");
let submitButton = document.getElementById("submit-btn");
let div = document.getElementById("weather");
let img = document.getElementById("icon");

submitButton.addEventListener("click", (e) => searchCity(e));

const searchCity = (e) => {
  e.preventDefault();
  getWeather(inputCity.value);
};

const getWeather = async (city) => {
  try {
    const response = await weatherRequest(city);
    div.textContent = response.current.condition.icon;
    img.src = response.current.condition.icon;
    console.table(response);
  } catch (err) {
    console.log(err);
  }
};
