export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #222",
    borderRadius: "20px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const titleStyle = {
    margin: 0,
    color: "333",
  };
  const buttonStyle = {
    backgroundColor: "#444",
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Inline Style</p>
      <button style={buttonStyle}>FiGHT!</button>
    </div>
  );
};
