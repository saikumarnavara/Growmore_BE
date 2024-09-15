// // swagger.js
// const swaggerAutogen = require("swagger-autogen")();

// const doc = {
//   info: {
//     title: "GROWMORE API",
//     description: "API Documentation for GROWMORE",
//   },
//   host: "growmore-seven.vercel.app",
//   schemes: ["https"],
// };

// const outputFile = "./swagger-output.json";
// const endpointsFiles = ["./index.js"];
// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//   require("./index.js");
// });

const swaggerAutogen = require("swagger-autogen")();

const isProduction = process.env.NODE_ENV === "production";

const doc = {
  info: {
    title: "GROWMORE API",
    description: "API Documentation for GROWMORE",
  },
  host: isProduction ? "growmore.vercel.app" : "localhost:4001",
  schemes: [isProduction ? "https" : "http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  if (!isProduction) {
    require("./index.js");
  }
});
