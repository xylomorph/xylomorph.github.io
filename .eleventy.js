const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const imageShortcode = require('./src/_11ty/shortcodes/image-shortcode');
const markdownLibrary = require('./src/_11ty/libraries/markdown-library');
const minifyHtml = require('./src/_11ty/utils/minify-html');
const markdownFilter = require('./src/_11ty/filters/markdown-filter');
const svgFilter = require('./src/_11ty/filters/svg-filter');
const browserSyncConfig = require('./src/_11ty/utils/browser-sync-config');
const { readableDateFilter, machineDateFilter } = require('./src/_11ty/filters/date-filters');

const mdi = require("markdown-it");
const argdownConfig = {logLevel: "verbose"};
const createArgdownPlugin = require("@argdown/markdown-it-plugin").default;
const markdownItArgdown = createArgdownPlugin(argdownConfig);



// re 'html: true': Using `{content | safe}` in templates did not work to allow html in md files. I configured the md-engine similar as in the 11ty-starter that we used for ArgInstitut. 
// see, e.g.:
// https://stackoverflow.com/questions/71653845/how-to-allow-html-to-pass-through-a-set-block-with-nunjucks
// https://stackoverflow.com/questions/29866034/stop-nunjucks-from-escaping-html?rq=3 
const mdiInstance = mdi({html: true}).use(markdownItArgdown);

// configuring mdi to 'target="_blank"'
// see https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer
// Remember the old renderer if overridden, or proxy to the default renderer.
var defaultRender = mdiInstance.renderer.rules.link_open || function (tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
};

mdiInstance.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  // Add a new `target` attribute, or replace the value of the existing one.
  tokens[idx].attrSet('target', '_blank');

  // Pass the token to the default renderer.
  return defaultRender(tokens, idx, options, env, self);
};


module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Filters
  eleventyConfig.addFilter('markdown', markdownFilter);
  
  eleventyConfig.addFilter('readableDate', readableDateFilter);
  eleventyConfig.addFilter('machineDate', machineDateFilter);
  eleventyConfig.addFilter('svg', svgFilter);

  // Shortcodes
  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);

  // Libraries
  //eleventyConfig.setLibrary('md', markdownLibrary);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // Trigger a build when files in this directory change
  eleventyConfig.addWatchTarget('./src/assets/scss/');

  // Minify HTML output
  eleventyConfig.addTransform('htmlmin', minifyHtml);

  // Don't process folders with static assets
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/assets/img');

  // Allow Turbolinks to work in development mode
  eleventyConfig.setBrowserSyncConfig(browserSyncConfig);

  eleventyConfig.setTemplateFormats([
          "html",
          "md",
          "njk",
	  "css" // css is not yet a recognized template extension in Eleventy
	]);
  eleventyConfig.setLibrary("md", mdiInstance);
    
  return {
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      layouts: "_layouts"
    },
  };
};
