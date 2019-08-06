export const getDomain = () => {
  if (isProduction()) {
    return "https://lucia-davor-wedding-backend.herokuapp.com";
  }
  return "http://localhost:8080";
};

const isProduction = () => {
  return process.env.NODE_ENV === "production";
};
