import { useWeather } from "../hooks/useWeather";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import WeatherSkeleton from "./skeleton/WeatherSkeleton";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ---------- Main weather module that orchestrates search, state, and animations
 * @returns {JSX.Element} The complete weather application interface
 */

const Weather = () => {
  const {
    weather,
    query,
    setQuery,
    suggestions,
    isSearching,
    loading,
    error,
    search,
    handleSelectCity,
  } = useWeather();

  return (
    <div className="weather">
      <SearchBar
        query={query}
        setQuery={setQuery}
        suggestions={suggestions}
        onSelectCity={handleSelectCity}
        isSearching={isSearching}
        onSearch={search}
      />

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: [0, -5, 5, -5, 5, 0] }}
            exit={{ opacity: 0 }}
            className="error-message"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {loading ? (
          <WeatherSkeleton key="loading" />
        ) : (
          weather && (
            <WeatherDisplay
              key={weather.location}
              temp={weather.temperature}
              location={weather.location}
              icon={weather.icon}
              humidity={weather.humidity}
              speed={weather.speed}
            />
          )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Weather;
