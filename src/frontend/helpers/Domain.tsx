export const getDomain = () => {
  if (isProduction()) {
    // TODO: insert prod url
    return "herokuuuu";
  }
  // TODO: change this with localhost
  return "http://localhost:8080";
};

const isProduction = () => {
  return process.env.NODE_ENV === "production";
};
