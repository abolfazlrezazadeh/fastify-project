import Fastify from "fastify";
import { productRoutes } from "./routes/product.routes.js";
import fastify from "fastify";
import { indexRoutes } from "./routes/index.routes.js";
const PORT = 5000;
const app = Fastify({
  logger: true,
});

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
