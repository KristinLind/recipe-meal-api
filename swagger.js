import swaggerAutogen from "swagger-autogen";

const swagger = swaggerAutogen({ openapi: "3.0.0" });

const doc = {
  info: {
    title: "Recipe API",
    description: "API documentation for recipes and meal plans",
    version: "1.0.0"
  },
  host: "cse341-node-r9gw.onrender.com",
  schemes: ["https"]
};

const outputFile = "./swagger.json";

const endpointsFiles = [
  "./routes/recipes.js",
  "./routes/mealPlans.js"
];

swagger(outputFile, endpointsFiles, doc);