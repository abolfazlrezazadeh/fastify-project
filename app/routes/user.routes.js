
import { loginUser, registerUser } from "./Schema/user.schema.js";


export function userRoute(fastify, options, done) {
  fastify.post("/user-register", registerUser);
  fastify.post("/user-login", loginUser);
  done();
}
