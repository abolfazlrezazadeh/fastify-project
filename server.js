import Fastify from "fastify";
import { productRoutes } from "./app/routes/product.routes.js";
import { indexRoutes } from "./app/routes/index.routes.js";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { swaggerConfig, swaggerUiConfig } from "./app/config/swagger.config.js";
import "./app/config/sequelize.config.js";
import { userRoute } from "./app/routes/user.routes.js";
import fastifyFormbody from "@fastify/formbody";
// use require
// import {createRequire} from "module"
// const require = createRequire(import.meta.url)
const PORT = 5000;
const app = Fastify({
  logger: true,
});
// Register the formbody plugin to parse URL-encoded data
// app.register(fastifyFormbody);
// config swagger
app.register(fastifySwagger, swaggerConfig);
app.register(fastifySwaggerUi, swaggerUiConfig);
// routes
app.register(indexRoutes);
app.register(productRoutes, { prefix: "products" });
app.register(userRoute, { prefix: "user" });

const main = async () => {
  try {
    // await fastify.ready();
    await app.listen(PORT);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

main();
