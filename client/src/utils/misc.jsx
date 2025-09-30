export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1, string.length);
};

export const capitalizeFirstLetterOfWords = (string) => {
  return string
    .split(" ")
    .map((s) => {
      return s.charAt(0).toUpperCase() + s.slice(1, s.length);
    })
    .join(" ");
};
