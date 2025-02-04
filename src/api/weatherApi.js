/**
 * ---------- Gets weather by city name
 * @param {string} city
 * @returns {Promise<Object>} Weather details
 */

export const getWeatherByCity = async (city) => {
  if (!city) {
    alert("Enter a city name.");
    return;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    console.log(data);

    return {
      humidity: data.main.humidity,
      temperature: Math.floor(data.main.temp),
      speed: data.wind.speed,
      location: data.name,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * ---------- Gets a city list based on a query
 * @param {string} query
 * @returns {Promise<string[]>}
 */
export const getCitySuggestions = async (query) => {
  try {
    if (!query) {
      return;
    }

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${
      import.meta.env.VITE_API_KEY
    }`;

    const response = await fetch(url);
    const data = await response.json();

    return data.map((city) => `${city.name}`);
  } catch (error) {
    console.log(`An error ocurred getting city suggestions: ${error}`);
  }
};
