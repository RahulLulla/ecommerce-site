/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import SuggestionCard from "../suggestionCard/SuggestionCard";

const SuggestedElement = ({ suggestion, index, intersection }) => {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const delay = 10;

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setTimeout(() => {
        setIsElementVisible(true);
      }, index * delay);
    } else {
      setIsElementVisible(false);
    }
  }, [index, intersection]);

  return (
    <SuggestionCard
      suggestion={suggestion}
      isElementVisible={isElementVisible}
    />
  );
};

export default SuggestedElement;
