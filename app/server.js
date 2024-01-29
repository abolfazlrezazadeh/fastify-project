import Fastify from "fastify";
const PORT = 5000;
const app = Fastify({
  logger: true,
});

app.get("/", (req, reply) => {
  reply.send({
    message: "helooo",
  });
});

(async () => {
  try {
    // await fastify.ready();
    await app.listen(PORT);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
})();
