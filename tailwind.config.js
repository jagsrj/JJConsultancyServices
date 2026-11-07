// Builds docs/styles.css from the classes used in docs/index.html.
// Rebuild after changing classes:  npx tailwindcss@3 -c tailwind.config.js -i tailwind.input.css -o docs/styles.css --minify
module.exports = { content: ['./docs/**/*.html'], theme: { extend: {} }, plugins: [] };
