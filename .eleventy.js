const CleanCSS = require("clean-css");
const { minify } = require("terser");
const metagen = require("eleventy-plugin-metagen");
const eleventyNavigation = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = (eleventyConfig) => {

  eleventyConfig.addPlugin(metagen);
  eleventyConfig.addPlugin(eleventyNavigation);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "html"
  ]);

  markdownTemplateEngine: "njk";

  // Perform manual passthrough file copy to include directories in the build output _site
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy({ "./src/_includes/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "./src/_includes/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "./src/_includes/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "./src/files": "files" });
  eleventyConfig.addPassthroughCopy({ "./src/_includes/font": "assets/fonts" });

  eleventyConfig.addPassthroughCopy("./src/favicon_data");

  eleventyConfig.addPassthroughCopy({ "./node_modules/bootstrap/dist/js/bootstrap.min.js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "./node_modules/@popperjs/core/dist/umd/popper.min.js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "./node_modules/pdfobject/pdfobject.min.js" : "assets/js"});

  // Create terser JS Minifier async filter (Nunjucks)
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.log(`Terser error: ${err}`);
      callback(null, code);
    }
  });

  // Configure image in a template paired shortcode
  eleventyConfig.addPairedShortcode("image", (srcSet, src, alt, sizes = "(min-width: 400px) 33.3vw, 100vw") => {
    return `<img srcset="${srcSet}" src="${src}" alt="${alt}" sizes="${sizes}" />`;
  });

  // get the current year to be placed in the footer
  eleventyConfig.addShortcode("getYear", function () {
    const year = new Date().getFullYear();
    return `${year}`;
  });

  eleventyConfig.addShortcode("img", async function ({ src, alt, className, imgDir, outputDir, pathToRoot, credit, id, sizes = "100vw"}) {
    if (alt === undefined) {
      throw new Error(`Missing \`alt\` on responsive image from: ${src}`);
    }

    const IMAGE_DIR = imgDir;
    const metadata = await Image(IMAGE_DIR + src, {
      widths: [300, 480, 640, 1024],
      formats: ["webp", "jpeg"],
      urlPath: pathToRoot + outputDir,
      outputDir: "./_site/" + outputDir,
      defaultAttributes: {
        loading: "lazy",
        decoding: "async"
      }
    });

    let lowsrc = metadata.jpeg[0];
    let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

    const sources = `${Object.values(metadata).map(
      imageFormat => `<source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`
    ).join("\n")}`;

    const img = `
      <img
        src="${lowsrc.url}"
        alt="${alt}"
        loading="lazy"
        decoding="async"
        class="${className || ''}"
        id="${id}"
      >`;

    return `<picture>\n\t${sources}\n\t${img}</picture>`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_includes/layouts",
      includes: "_includes",
    },
    templateFormats: ["md", "liquid", "njk"],
    passthroughFileCopy: true
  }
};



