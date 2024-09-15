const swaggerAutogen = require("swagger-autogen")();

const isProduction = process.env.NODE_ENV === "production" || true;
console.log({ isProduction });

const doc = {
  info: {
    title: "GROWMORE API",
    description: "API Documentation for GROWMORE",
  },
  host:
    process.env.NODE_ENV === "production"
      ? "growmore.vercel.app"
      : "localhost:4001",
  schemes: [process.env.NODE_ENV === "production" ? "https" : "http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  if (!isProduction) {
    require("./index.js");
  }
});
