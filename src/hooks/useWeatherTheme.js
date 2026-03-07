import { useLayoutEffect } from "react";

const THEMES = {
  HOT: { color1: "#f6d365", color2: "#fda085" },
  COLD: { color1: "#a1c4fd", color2: "#c2e9fb" },
  DEFAULT: { color1: "#d1c2f4", color2: "#a6d1ff" },
};

/**
 * ---------- Dynamically updates CSS variables on the root element based on temperature
 * @param {number|undefined} temp - Current temperature to determine the visual theme
 */

export const useWeatherTheme = (temp) => {
  useLayoutEffect(() => {
    if (temp === undefined || temp === null) return;

    const root = document.querySelector(".app");

    if (root) {
      let theme = THEMES.DEFAULT;
      if (temp > 28) theme = THEMES.HOT;
      else theme = THEMES.COLD;

      root.style.setProperty("--bg-color-1", theme.color1);
      root.style.setProperty("--bg-color-2", theme.color2);
    }
  }, [temp]);
};
