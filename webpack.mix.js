const path = require("path");
const mix = require("laravel-mix");

require("mix-html-builder");

const arJsPage = ["src/js/app.js"];

const arCssPage = [
    "src/css/style.css",
    "src/pages/about-us/about-us.css"
];

mix.setPublicPath(path.resolve('./'))

mix.webpackConfig({
	resolve: {
		modules: [path.resolve(__dirname, "node_modules")],
	},
});

arJsPage.forEach((sJsPage) => {
	mix.js(sJsPage, "dist/js");
});

arCssPage.forEach((sCssPage) => {
    mix.postCss(sCssPage, "dist/css")
});

mix.disableNotifications();

mix
    .html({
        htmlRoot: './src/pages/**/*.html'
    })
    .version()
    // .copy("./src/**/*.html", "dist")
    .browserSync({
        server: "./dist/",
        files: ["./**/*.html", "./dist"],
    });
