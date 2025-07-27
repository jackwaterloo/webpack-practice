# Webpack Practice

This project is a learning exercise for understanding [Webpack](https://webpack.js.org/), following The Odin Project's [Webpack lesson](https://www.theodinproject.com/lessons/javascript-webpack).

## Current Progress

The project currently demonstrates:
- Basic Webpack configuration with development mode
- ES Module system (imports/exports)
- HTML processing with HtmlWebpackPlugin
- CSS loading with style-loader and css-loader
- Asset management for images and other files

## Project Structure

- `src/` — Source files
  - `index.js` — Main entry point
  - `greeting.js` — Example module
  - `styles.css` — Stylesheet demonstrating CSS imports
  - `template.html` — HTML template for HtmlWebpackPlugin
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

3. **View the output:**
   Open `dist/index.html` in your browser to see:
   - Purple background from CSS
   - Console output showing "Hello, Odinite!"

## Learning Goals

Following The Odin Project curriculum to learn:
- Bundling JavaScript modules
- Managing assets with Webpack
- Development workflow optimization
- Source mapping and debugging
- Development server configuration

Feel free to explore the code and configuration to understand how Webpack works!