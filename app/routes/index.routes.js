
export function indexRoutes(fastify, options, done) {
    fastify.get("/", (req,reply)=>{
        reply.send({
            message : "heloo"
        })
    });
    done();
  }