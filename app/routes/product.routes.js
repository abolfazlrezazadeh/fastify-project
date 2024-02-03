import { getProductById, getProducts } from "../handler/product.handler.js";

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
    response: {
      200: {
        type: "array",
        items: product,
      },
    },
  },
  handler : getProducts
};
const getOneProduct = {
  schema: {
    response: {
      200: {
        type: "array",
        items: product,
      },
    },
    
  },
  handler : getProductById
};

export function productRoutes(fastify, options, done) {
  fastify.get("/products", getProductsItem);
  fastify.get("/products/:id", getOneProduct);
  done();
}

