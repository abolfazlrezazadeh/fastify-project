import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
// Define a route to create a new user
export async function createUser(req, reply) {
  const { userName, firstName, lastName, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      userName,
      firstName,
      lastName,
      password: hashedPassword,
    });
    console.log("user created", newUser.toJSON());
    reply.code(201).send("user created successfully", newUser);
    // save user changes
     await newUser.save();
  } catch (error) {
    console.log(error);
    reply.code(500).send({ error: "failed" });
  }
}
export async function LoginUser(req, reply) {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        userName,
      },
    });
    console.log(password);
    if (!user)
      reply.code(400).send({ error: "username or password is not correct" });
    const compareResult = await bcrypt.compare(password, user.password);
    if (!compareResult)
      reply.code(400).send({ error: "username or password is not correct" });
    reply.code(200).send("loggin successfully");
  } catch (error) {
    console.log(error);
    reply.code(500).send({ error: "failed" });
  }
}
