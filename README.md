# Webpack Practice

This project is a simple setup to practice using [Webpack](https://webpack.js.org/).

This is based off Odin Project's Webpack lesson here: [https://www.theodinproject.com/lessons/javascript-webpack](https://www.theodinproject.com/lessons/javascript-webpack)

## Project Structure

- `src/` — Source files
  - `index.js` — Entry point
  - `greeting.js` — Example module
- `webpack.config.js` — Webpack configuration
- `dist/` — Output directory (created after build)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npx webpack
   ```
   This will bundle your code and output `dist/main.js`.

3. **Check the output:**
   The bundled file will log a greeting to the console when run in a browser or Node.js.

## What this demonstrates
- Basic Webpack configuration
- ES module imports/exports
- Bundling JavaScript files

Feel free to modify the source files and re-run the build to see how Webpack updates the output.