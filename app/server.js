import Fastify from "fastify";
import { productRoutes } from "./routes/product.routes.js";
import { indexRoutes } from "./routes/index.routes.js";
const PORT = 5000;
const app = Fastify({
  logger: true,
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
}

main();
