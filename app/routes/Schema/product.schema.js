import {
  createProduct,
  getProductById,
  getProducts,
} from "../../handler/product.handler.js";

export const product = {
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

export const getProductsItem = {
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
export const getOneProduct = {
  schema: {
    tags: ["products"],
    params: {
      id: { type: "integer", description: "Id of product" },
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
export const postProduct = {
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
