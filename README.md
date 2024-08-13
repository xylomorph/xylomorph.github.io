# 👱 Sebastian Cacean's Personal Webpage

This repo contains my personal webpage. It is is built with <a href="https://www.11ty.dev/" target="_blank">Eleventy</a> based on the <a href="https://github.com/TylerMRoderick/fernfolio-11ty-template/tree/master" target="_blank">Fernfolio starter</a>.

## 🏠 Local Development/Testing

1. Fork, clone or download
2. `cd` into the root folder
3. Install the goods: `npm install`
4. Run it: `npm start`
5. open a browser and go to `http://localhost:8080`

After you have done that once, you only need to repeat step 4 & 5 to run the website locally.

## 💻 Development Scripts

**`npm start`**

> Run 11ty with hot reload at localhost:8080

**`npm run build`**

> Generate minified production build

Use this as the "Publish command".

## Deployment on Github Pages

The basic idea is to publish from a separate github branch by using [gh-pages](https://www.npmjs.com/package/gh-pages). The configuration is based on [https://dev.to/ddhogan/publishing-an-eleventy-site-to-github-pages-40c5](https://dev.to/ddhogan/publishing-an-eleventy-site-to-github-pages-40c5).

1. Install gh-pages (when deploying for the first time): `npm install gh-pages --save-dev`.
2. Build the website: `npm run build` (generates fresh output into the directory `_site`).
3. Deploy on githup: `npm run deploy`.

## License

The code of this website is licensed under the [MIT License](https://opensource.org/license/MIT) (© 2024 Sebastian Cacean). Texts on this website are licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
