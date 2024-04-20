export const getToastStyles = () => {
  return {
    success: {
      style: {
        backgroundColor: "green",
        padding: "10px",
      },
    },
    error: {
      style: {
        background: "red",
      },
    },
    duration: 4000,
    position: "top-right",
  };
};
