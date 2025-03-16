const StarryBackground = () => {
  return (
    <div
      style={{
        position: "fixed", // Covers full screen
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #38a169, #2f855a) !important " , // Stronger green contrast
        zIndex: -1, // Ensures it stays in the background
      }}
    />
  );
};

export default StarryBackground;
