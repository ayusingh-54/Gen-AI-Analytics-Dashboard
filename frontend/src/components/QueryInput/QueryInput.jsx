import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { setCurrentQuery } from "../../redux/slices/queriesSlice";

const SUGGESTIONS = [
  "Show monthly sales trends",
  "Compare quarterly revenue",
  "Show user growth over time",
  "Display sales by region",
  "Show monthly active users",
];

const QueryInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const dispatch = useDispatch();

  // Debounced function to update suggestions
  const updateSuggestions = debounce((value) => {
    if (value.length > 2 && isFocused) {
      const filtered = SUGGESTIONS.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 3));
    } else {
      setSuggestions([]);
    }
  }, 300);

  useEffect(() => {
    updateSuggestions(inputValue);

    // Cleanup debounce on unmount
    return () => updateSuggestions.cancel();
  }, [inputValue, updateSuggestions, isFocused]);

  // Handle clicks outside of the component to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch(setCurrentQuery(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    dispatch(setCurrentQuery(suggestion));
    setSuggestions([]);
    onSubmit(suggestion);
  };

  return (
    <div className="w-full relative mb-8">
      <form onSubmit={handleSubmit} className="relative" ref={inputRef}>
        <input
          type="text"
          className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Ask a question (e.g., 'Show monthly sales trends')"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
        <button
          type="submit"
          className="absolute right-3 top-3 bg-primary text-white px-4 py-1 rounded-lg hover:bg-opacity-90"
        >
          Ask
        </button>
      </form>

      {suggestions.length > 0 && isFocused && (
        <div
          ref={suggestionsRef}
          className="absolute w-full bg-white border rounded-lg shadow-lg z-50"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QueryInput;
