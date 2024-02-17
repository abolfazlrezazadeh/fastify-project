
import { registerUser } from "./Schema/auth.schema.js";


export function userRoute(fastify, options, done) {
  fastify.post("/user-register", registerUser);
  done();
}
