import { User } from "../model/user.model.js";
import bcrypt from "bcrypt"
// Define a route to create a new user
export async function createUser(req,reply){
    const {userName,firstName,lastName,password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({userName,firstName,lastName,password : hashedPassword});
        console.log('user created', newUser.toJSON());
        reply.code(201).send('user created successfully', newUser)
    } catch (error) {
        console.log(error);
        reply.code(500).send({error : "failed"})
    }
}