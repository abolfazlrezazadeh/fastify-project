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

function productRoutes(fastify, options, done) {
  fastify.get("/products", getProductsItem);
}
