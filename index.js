// This imports the class Example from example.js
import Example from './src/example';

// Now using it is as simple as...
let example = new Example("Webpack + Babel"),
    h1Example = document.getElementById("example");

h1Example.innerText = example.getName();