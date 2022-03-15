async function getWeather() {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=d0a1fcd9a4b6423b92752725212711&q=London&aqi=no",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

export { getWeather };
