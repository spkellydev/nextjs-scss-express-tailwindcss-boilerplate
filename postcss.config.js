module.exports = {
  plugins: [
    require("postcss-easy-import")({ prefix: "_" }),
    require("tailwindcss")("./app/tailwind.js"),
    require("autoprefixer")({})
  ]
};
