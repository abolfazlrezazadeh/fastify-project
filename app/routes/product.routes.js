import {
  createProduct,
  getProductById,
  getProducts,
} from "../handler/product.handler.js";

const product = {
  type: "object",
  properties: {
    id: {
      type: "integer",
    },
    name: {
      type: "string",
    },
  },
};

const getProductsItem = {
  schema: {
    tags: ["products"],
    response: {
      200: {
        type: "array",
        items: product,
      },
    },
  },
  handler: getProducts,
};
const getOneProduct = {
  schema: {
    tags: ["products"],
    params: {
      id: { type: "integer" },
    },
    response: {
      200: {
        type: "object",
        properties: { product },
      },
    },
  },
  handler: getProductById,
};
const postProduct = {
  schema: {
    tags: ["products"],
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        price: { type: "integer" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: createProduct,
};

export function productRoutes(fastify, options, done) {
  fastify.get("/products", getProductsItem);
  fastify.get("/products/:id", getOneProduct);
  fastify.post("/Create-product", postProduct);
  done();
}
