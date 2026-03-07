import { FiWind } from "react-icons/fi";
import { IoIosWater } from "react-icons/io";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

/**
 * ---------- Counter animation for smooth temperature transitions
 * @param {number} value - The target temperature to animate towards
 * @returns {JSX.Element} Animated span with the rounded count
 */

const AnimatedNumber = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

/**
 * ---------- Main weather data presentation with entrance and hover animations
 * @param {Object} props - Weather details: temp, location, icon, humidity, speed
 * @returns {JSX.Element} Visual weather card content
 */

const WeatherDisplay = ({ temp, location, icon, humidity, speed }) => (
  <motion.div
    key={location}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="weather__icon">
      <motion.img
        src={icon}
        alt=""
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </div>
    <div>
      <h1 className="outfit-semiBold temperature">
        <AnimatedNumber value={temp} />
        °C
      </h1>
      <p className="outfit-regular">{location}</p>
    </div>
    <motion.div
      className="weather__info"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="weather__humidity-percentage">
        <IoIosWater size={25} />
        <div className="info-text">
          <p className="outfit-regular">{humidity}%</p>
          <p className="outfit-regular">Humidity</p>
        </div>
      </div>
      <div className="weather__wind-speed">
        <FiWind size={25} />
        <div className="info-text">
          <p className="outfit-regular">{speed} Km/h</p>
          <p className="outfit-regular">Wind Speed</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default WeatherDisplay;
