import { motion } from "framer-motion";
import "./skeleton.css";

/**
 * ---------- Visual placeholder used during weather data fetching
 * @returns {JSX.Element} Animated skeleton structure
 */

const WeatherSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="weather-content-wrapper"
      style={{ display: "grid", gap: "2rem" }}
    >
      <div
        className="skeleton-box skeleton-circle"
        style={{ width: 100, height: 100, margin: "0 auto" }}
      />

      <div style={{ display: "grid", gap: "0.5rem" }}>
        <div className="skeleton-box skeleton-text-lg" />
        <div className="skeleton-box skeleton-text-sm" />
      </div>

      <div className="weather__info" style={{ marginTop: "30px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            className="skeleton-box skeleton-circle"
            style={{ width: 30, height: 30 }}
          />
          <div style={{ display: "grid", gap: "5px" }}>
            <div className="skeleton-box" style={{ width: 40, height: 12 }} />
            <div className="skeleton-box" style={{ width: 60, height: 10 }} />
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            className="skeleton-box skeleton-circle"
            style={{ width: 30, height: 30 }}
          />
          <div style={{ display: "grid", gap: "5px" }}>
            <div className="skeleton-box" style={{ width: 40, height: 12 }} />
            <div className="skeleton-box" style={{ width: 60, height: 10 }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherSkeleton;
