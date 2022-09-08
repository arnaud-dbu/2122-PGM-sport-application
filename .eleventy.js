
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/assets/styles/main.css": "assets/styles/main.css",
    "src/script/main.js": "script/main.js",
    "src/assets/images": "",
    "src/assets/icons": ""
  });

  return {
    ...eleventyConfig,
    dir: {
      input: "src",
      output: "build"      
    }
  }
};