module.exports = {
	plugins: [
		require("postcss-import"),
		require("tailwindcss/nesting"),
		require("tailwindcss"),
		require("@csstools/postcss-sass"),
		require("autoprefixer"),
		require("postcss-gap")({ method: "duplicate" }),
	],
};