const sliderStyle = {
  "& *": {},
  "& .MuiSlider-rail": {
    height: "1.3px",
  },
  "& .MuiSlider-track": {
    height: "0.1px",
    color: "rgb(60,156,226)",
  },
  "& .MuiSlider-thumb": {
    width: "20px",
    height: "20px",
    boxShadow: "none",
    backgroundColor: "#f4f4f4",
    border: "1px solid #d2d2d2",
  },
  "& .MuiSlider-thumb::before": {
    width: "4px",
    height: "4px",
    boxShadow: "none",
    backgroundColor: "rgb(60,156,226)",
  },
  "& .MuiSlider-thumb:hover": {
    border: "1px solid rgb(60,156,226)",
  },
  // MuiSlider-track
};

export { sliderStyle };
