import Fastify from "fastify";
const PORT = 5000
const fastify = Fastify({
  logger: true,
});


(async () => {
  try {
    // await fastify.ready();
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
})();
