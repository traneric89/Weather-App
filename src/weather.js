const weatherRequest = async (city) => {
  const response = await fetch(
    `https://crossorigin.me/http://api.weatherapi.com/v1/forecast.json?key=d0a1fcd9a4b6423b92752725212711&q=${city}&days=3&aqi=no&alerts=no`,
    { mode: "cors" }
  );
  if (response.status >= 400 && response.status < 600) {
    throw new Error("Invalid City");
  } else {
    const weatherData = await response.json();
    return weatherData;
  }
};

export { weatherRequest };
