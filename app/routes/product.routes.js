import {
  getOneProduct,
  getProductsItem,
  postProduct,
} from "./Schema/product.schema.js";

export function productRoutes(fastify, options, done) {
  //   access token validator
  fastify.addHook("onRequest", (request) => request.jwtVerify());
  //all products
  fastify.get("/products", getProductsItem);
  // get product by Id
  fastify.get("/products/:id", getOneProduct);
  // // create product
  fastify.post("/Create-product", postProduct);
  done();
}
