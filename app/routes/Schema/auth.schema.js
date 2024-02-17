import { createUser } from "../../handler/user.handler.js";

export const User = {
  type: "object",
  properties: {
    username: { type: "string" },
    firstName: { type: "string" },
    lastName: { type: "string" },
    password: { type: "string" },
  },
};

export const registerUser = {
  schema: {
    tags: ["user"],
    body: {
      type: "object",
      required: ["username", "firstName", "lastName", "password"],
      properties: {
        userName: { type: "string", description: "username of user" },
        firstName: { type: "string", description: "firstName of user" },
        lastName: { type: "string", description: "lastname of user" },
        password: { type: "string", description: "password of user" },
      },
    },
    response: {
      201: {
        description: 'user created successfully',
        type: "object",
        properties: {
            result: { type: 'string' }
          }
      },
    },
  },
  handler: createUser,
};
