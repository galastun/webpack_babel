import Example from './src/example';

let example = new Example("Webpack + Babel"),
    h1Example = document.getElementById("example");

h1Example.innerText = example.getName();