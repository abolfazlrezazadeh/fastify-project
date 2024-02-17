import { indexRoute } from "./Schema/index.schema.js";


export function indexRoutes(fastify, options, done) {
  fastify.get("/", indexRoute);
  done();
}
