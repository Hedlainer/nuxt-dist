const config = require("./nuxt.config.js");
const app = require("fastify")();
const { Nuxt } = require("nuxt-start");
const nuxt = new Nuxt({ ...config, dev: false });

async function start() {
  await nuxt.ready();
  app.use(nuxt.render);
  await app.ready();
  app.listen(3000);
  return app;
}
start();
