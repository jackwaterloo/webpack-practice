# Webpack Practice

This project demonstrates using [Webpack](https://webpack.js.org/) for bundling and asset management, following The Odin Project's [Webpack lesson](https://www.theodinproject.com/lessons/javascript-webpack).

## Current Implementation

The project demonstrates:
- Webpack configuration in development mode
- Module bundling with entry/output management
- HTML template processing via HtmlWebpackPlugin
- CSS handling with style-loader and css-loader
- Asset management for images using asset/resource
- HTML asset handling with html-loader

## Project Structure

- `src/` — Source files
  - `index.js` — Entry point with module imports and DOM manipulation
  - `greeting.js` — Example module exporting a greeting string
  - `styles.css` — Stylesheet with purple background
  - `template.html` — HTML template (processed by HtmlWebpackPlugin)
  - `avatar-1295406_640.png` — Sample image for asset handling
- `webpack.config.js` — Webpack configuration with loaders and plugins
- `dist/` — Build output directory (created by Webpack)

## Features

1. **Module Bundling**
   - ES6 module system for JavaScript
   - Entry point configuration
   - Clean output directory on each build

2. **Asset Processing**
   - CSS imports into JavaScript
   - Image handling in JavaScript and HTML
   - HTML template processing
   - Automatic script injection

## Usage

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npx webpack
   ```

3. **View the result:**
   Open `dist/index.html` to see:
   - Purple background (CSS working)
   - Avatar image (asset loading working)
   - "Hello, Odinite!" in console (JS modules working)

This project serves as a practical example of Webpack's core features and configuration options.

## Learning Goals

Following The Odin Project curriculum to learn:
- Bundling JavaScript modules
- Managing assets with Webpack
- Development workflow optimization
- Source mapping and debugging
- Development server configuration