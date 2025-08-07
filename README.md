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
- Source maps for debugging (`devtool: "eval-source-map"`)
- Development server with file watching
- Module bundling and asset management

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

3. **Development Setup**
   - Webpack dev server for live reloading
   - Source maps for better debugging
   - HTML template file watching

## Usage

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Launch Development Server:**
   ```bash
   npx webpack serve
   ```
   Visit http://localhost:8080

Or you can build the output yourself and view the files in the `dist/` folder.

3. **Build Project:**
   ```bash
   npx webpack
   ```

## What I've Learned
- Setting up a basic Webpack configuration
- Configuring development tools (dev server, source maps)
- Managing different asset types (JS, CSS, images)
- Understanding module bundling and dependency graphs
- Working with Webpack plugins and loaders

This project implements core Webpack concepts from the ground up to better understand modern web tooling.