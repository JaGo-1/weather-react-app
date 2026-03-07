import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { useWeatherTheme } from "./useWeatherTheme";
import { getWeatherByCity, getCitySuggestions } from "../api/weatherApi";
import icons from "../assets/images";

/**
 * ---------- Custom hook that manages weather data, city suggestions, and UI states
 * @returns {Object} State variables and handlers for weather searching logic
 */

export const useWeather = () => {
  const [weather, setWeather] = useState();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const debouncedQuery = useDebounce(query, 300);

  useWeatherTheme(weather?.temperature);

  /**
   * Fetches weather data for a specific city and updates the state
   * @param {string} city - Name of the city to search
   */

  const search = async (city) => {
    if (!city) return;
    setError(null);
    setLoading(true);

    try {
      const data = await getWeatherByCity(city);
      if (data) {
        setWeather({ ...data, icon: icons[data.icon] });
        setQuery("");
      }
    } catch (err) {
      setError(
        err.message === "city not found"
          ? "Ups! We couldn't find that city."
          : err.message,
      );
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    search("Buenos Aires");
  }, []);

  useEffect(() => {
    if (debouncedQuery.trim().length <= 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setIsSearching(true);
      const results = await getCitySuggestions(debouncedQuery);
      setSuggestions(results || []);
      setIsSearching(false);
    };

    fetchSuggestions();
  }, [debouncedQuery]);

  /**
   * Handles the selection of a city from the suggestions list
   * @param {string|null} city - The selected city name
   */

  const handleSelectCity = (city) => {
    if (!city) {
      setSuggestions([]);
      return;
    }
    setQuery(city);
    search(city);
  };

  return {
    weather,
    query,
    setQuery,
    suggestions,
    isSearching,
    loading,
    error,
    search,
    handleSelectCity,
  };
};
