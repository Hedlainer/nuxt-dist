module.exports = {
  mode: "universal",

  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: "Vue Nuxt Test",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ]
  },
  build: {
    filenames: {
      chunk: ({ isDev }) => (isDev ? "[name].js" : "[name].bundle.js")
    },
    publicPath: "/_nuxt/"
  },
  srcDir: "client/",
  buildDir: "nuxt",
  render: {
    compressor: false
  }
};
