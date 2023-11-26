let pail=(n)=>{
    n = n+""
    return n.split("").reverse().join("");

}
let prompt = require('prompt-sync')();
let n = prompt("Enter the sequence: ");
if(pail(n)==n){
    console.log("the string as pailendram")
}else{
    console.log("The sequence are not palaindrom")
}