
import { registerUser } from "./Schema/user.schema.js";


export function userRoute(fastify, options, done) {
  fastify.post("/user-register", registerUser);
  done();
}
