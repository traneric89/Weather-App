import { addDays, format } from "date-fns";

const renderNewCity = (data) => {
  const currentDate = new Date();
  const tomorrow = addDays(currentDate, 1);
  const dayAfter = addDays(currentDate, 2);

  let city = document.getElementById("city");
  let country = document.getElementById("country");

  let day0 = document.getElementById("day0");
  let date0 = document.getElementById("date0");
  let day0TempC = document.getElementById("day0-temp-c");
  let day0TempF = document.getElementById("day0-temp-f");
  let day0Condition = document.getElementById("day0-condition");
  let day0Humidity = document.getElementById("day0-humidity");
  let day0Rain = document.getElementById("day0-rain");
  let day0Wind = document.getElementById("day0-wind");

  let day1 = document.getElementById("day1");
  let date1 = document.getElementById("date1");
  let day1TempC = document.getElementById("day1-temp-c");
  let day1TempF = document.getElementById("day1-temp-f");
  let day1Condition = document.getElementById("day1-condition");
  let day1Humidity = document.getElementById("day1-humidity");
  let day1Rain = document.getElementById("day1-rain");
  let day1Wind = document.getElementById("day1-wind");

  let day2 = document.getElementById("day2");
  let date2 = document.getElementById("date2");
  let day2TempC = document.getElementById("day2-temp-c");
  let day2TempF = document.getElementById("day2-temp-f");
  let day2Condition = document.getElementById("day2-condition");
  let day2Humidity = document.getElementById("day2-humidity");
  let day2Rain = document.getElementById("day2-rain");
  let day2Wind = document.getElementById("day2-wind");

  city.textContent = data.location.name;
  country.textContent = data.location.country;

  day0.textContent = format(currentDate, "EEEE");
  date0.textContent =
    format(currentDate, "MMMM") + " " + format(currentDate, "d");
  day0TempC.innerHTML = `${data.current.feelslike_c} &deg;C`;
  day0TempF.innerHTML = `${data.current.feelslike_f}  &deg;F`;
  day0Condition.textContent = data.current.condition.text;
  day0Humidity.textContent = `${data.current.humidity} %`;
  day0Rain.textContent = `${data.current.precip_mm} mm`;
  day0Wind.textContent = `${data.current.wind_kph} km/h`;

  day1.textContent = format(tomorrow, "EEEE");
  date1.textContent = format(tomorrow, "MMMM") + " " + format(tomorrow, "d");
  day1TempC.innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c}  &deg;C`;
  day1TempF.innerHTML = `${data.forecast.forecastday[0].day.avgtemp_f}  &deg;F`;
  day1Condition.textContent = data.forecast.forecastday[0].day.condition.text;
  day1Humidity.textContent = `${data.forecast.forecastday[0].day.avghumidity} %`;
  day1Rain.textContent = `${data.forecast.forecastday[0].day.totalprecip_mm} mm`;
  day1Wind.textContent = `${data.forecast.forecastday[0].day.maxwind_kph} km/h`;

  day2.textContent = format(dayAfter, "EEEE");
  date2.textContent = format(dayAfter, "MMMM") + " " + format(dayAfter, "d");
  day2TempC.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_c}  &deg;C`;
  day2TempF.innerHTML = `${data.forecast.forecastday[1].day.avgtemp_f}  &deg;F`;
  day2Condition.textContent = data.forecast.forecastday[1].day.condition.text;
  day2Humidity.textContent = `${data.forecast.forecastday[1].day.avghumidity} %`;
  day2Rain.textContent = `${data.forecast.forecastday[1].day.totalprecip_mm} mm`;
  day2Wind.textContent = `${data.forecast.forecastday[1].day.maxwind_kph} km/h`;
};

export { renderNewCity };
