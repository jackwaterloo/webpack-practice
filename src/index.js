import "./styles.css"; //imports the css into js. reliant on "style-loader", "css-loader" in webpack
import avatarImage from "/Users/jack/Desktop/projects/webpack-practice/src/avatar-1295406_640.png"; // gets handled as an asset by webpack
   
const image = document.createElement("img");
image.src = avatarImage;
   
document.body.appendChild(image);

import { greeting } from "./greeting.js";

console.log(greeting);
