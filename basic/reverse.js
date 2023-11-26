let revrse =(n)=>{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(revrse(123)));
// Explain
n = "maaaz";
console.log(n.split(""))
n = n.split("");
console.log(n.reverse())
n = n.join("");
console.log(n);
n = Number(n)
console.log(n)

