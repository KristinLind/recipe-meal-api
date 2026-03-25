import swaggerAutogen from "swagger-autogen";

const swagger = swaggerAutogen();

const doc = {
  info: {
    title: "Recipe API",
    description: "API documentation for recipes and meal plans",
    version: "1.0.0"
  },
  host: "cse341-node-r9gw.onrender.com",
  schemes: ["https"],
  basePath: "/"
};

const outputFile = "./swagger.json";

const endpointsFiles = [
  "./server.js",           
];

swagger(outputFile, endpointsFiles, doc);