import Fastify from "fastify";
import { productRoutes } from "./routes/product.routes.js";
import { indexRoutes } from "./routes/index.routes.js";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { swaggerConfig } from "./config/swagger.config.js";
// use require
// import {createRequire} from "module"
// const require = createRequire(import.meta.url)
const PORT = 5000;
const app = Fastify({
  logger: true,
});
// config swagger
app.register(fastifySwagger,swaggerConfig);
app.register(fastifySwaggerUi, {
  prefix: "swagger",
});
// routes
app.register(indexRoutes);
app.register(productRoutes);

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
