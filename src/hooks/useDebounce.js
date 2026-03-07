import { useState, useEffect } from "react";

/**
 * ---------- Delays the update of a value to prevent excessive executions
 * @param {any} value - The input value to be debounced
 * @param {number} delay - Time in milliseconds to wait before updating
 * @returns {any} The latest value after the specified delay
 */

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
