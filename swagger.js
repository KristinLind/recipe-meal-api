import swaggerAutogen from "swagger-autogen";

const swagger = swaggerAutogen();

const doc = {
  info: {
    title: "Recipe API",
    description: "API documentation for recipes and meal plans"
  },
  host: "cse341-node-r9gw.onrender.com",
  schemes: ["https"]
};

const outputFile = "./swagger.json";
const endpointsFiles = [
  "./server.js",
  "./routes/recipes.js",
  "./routes/mealPlans.js"
];

swagger(outputFile, endpointsFiles, doc);