var _ = require('lodash');
// if someday if lodash which is in bundle.js get a newer update just change the version no. from package.json on line 12 which says "lodash": "^4.17.20".
// no need to download just change the version number.                                                                                   
var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 3))
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

const setGradient = ()=> {
    body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);