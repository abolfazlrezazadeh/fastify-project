const indexRoute = {
  schema: {
    tags: ["home"],
    security: [
      {
        apiKey: [],
      },
    ],
    response: {
      200: {
        type: "object",
        properties: {
          header: {
            type: "object",
            properties: {
              authorization: { type: "string" },
            },
          },
          message: { type: "string" },
        },
      },
    },
  },
  handler: (req, reply) => {
    reply.send({
      header: req.headers,
      message: "heloo",
    });
  },
};

export function indexRoutes(fastify, options, done) {
  fastify.get("/", indexRoute);
  done();
}
