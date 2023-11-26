let prompt = require('prompt-sync')();
console.log("Enter all values in degree");
let letOrg = parseFloat(prompt("Enter the latitude of origin: "));
let longOrg = parseFloat(prompt("Enter the longtitude of origin: "));
let letDes = parseFloat(prompt("Enter the latitude of destination: "));
let longDes = parseFloat(prompt("Enter the longtitude of destination: "));
letOrg *=Math.PI/180;
longOrg *=Math.PI/180;
letDes *=Math.PI/180;
longDes *=Math.PI/180;
const R = 6371;
let delta = longDes - longOrg;
let a = Math.acos(Math.sin(letDes) * Math.sin(letOrg) + Math.cos(letDes) * Math.cos(letOrg)) * Math.cos(delta);
let distance = a * R;
console.log(`Distance = ${distance} Km`);

