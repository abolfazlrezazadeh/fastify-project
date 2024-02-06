export const swaggerConfig = {
  swagger: {
    info: {
      title: "fastify swagger",
      description: "documetation of fastify project",
      version: "0.1.0",
    },
    host: "localhost:5000",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      { name: "products", description: "admin can access this part" },
      { name: "home", description: "all of the users can access to this part" },
    ],
    // token
    securityDefinitions: {
      apiKey: {
        type: "apiKey",
        name: "authorization",
        in: "header",
      },
    },
    //add security for all routes
    security: [{ apiKey: [] }],
  },
};

export const swaggerUiConfig = {
  prefix: "swagger",
}