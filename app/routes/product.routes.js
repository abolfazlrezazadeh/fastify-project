import {
  getOneProduct,
  getProductsItem,
  postProduct,
} from "./Schema/product.schema.js";

export function productRoutes(fastify, options, done) {
  fastify.get("/products", getProductsItem);
  fastify.get("/products/:id", getOneProduct);
  fastify.post("/Create-product", postProduct);
  done();
}
