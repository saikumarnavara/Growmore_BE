const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "GROWMORE API",
    description: "API Documentation for GROWMORE",
  },
  // host: "growmore-seven.vercel.app",
  // schemes: ["https"],
  host: "localhost:4001",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index.js");
});
