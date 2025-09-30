const cardStyle = {
  boxShadow: "none",
  borderBottom: "1px solid black",
  borderRadius: "0px",
};

const cardHeaderStyle = {
  cursor: "pointer",
  "& .MuiCardHeader-title": {
    fontSize: "1rem",
    fontWeight: "bolder",
    textTransform: "uppercase",
    fontFamily: "SoleilBold",
  },
};

const iconStyle = {
  border: "1px solid black",
  padding: "0",
  margin: "0",
};

export { cardStyle, cardHeaderStyle, iconStyle };
