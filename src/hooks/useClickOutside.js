import { useEffect } from "react";

/**
 * ---------- Detects clicks outside of a specific referenced element
 * @param {React.RefObject} ref - The element to monitor
 * @param {Function} callback - Function to execute when a click outside occurs
 */
export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    /**
     * Handles the mousedown event and checks if the click was outside the ref
     * @param {MouseEvent} event
     */
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
