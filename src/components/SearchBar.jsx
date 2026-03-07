import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useClickOutside } from "../hooks/useClickOutside";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ---------- Search input with animated suggestions and status feedback
 * @param {Object} props - Component properties
 * @returns {JSX.Element} Interactive search bar module
 */

const SearchBar = ({
  query,
  setQuery,
  suggestions,
  onSelectCity,
  isSearching,
  onSearch,
}) => {
  const searchRef = useRef(null);

  useClickOutside(searchRef, () => onSelectCity(null));

  return (
    <div className="weather__search-container" ref={searchRef}>
      <div className="weather__search-bar">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="icon search-icon" onClick={() => onSearch(query)}>
          {isSearching ? (
            <AiOutlineLoading3Quarters className="spinner" />
          ) : (
            <CiSearch />
          )}
        </div>
      </div>

      <AnimatePresence>
        {query.length > 2 && !isSearching && suggestions.length === 0 && (
          <motion.ul
            className="suggestions"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <li className="loading-item">No cities found for "{query}"</li>
          </motion.ul>
        )}

        {suggestions.length > 0 && (
          <motion.ul
            className="suggestions"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {suggestions.map((city, i) => (
              <motion.li
                key={i}
                onClick={() => onSelectCity(city)}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {city}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
