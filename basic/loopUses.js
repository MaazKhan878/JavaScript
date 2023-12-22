let prompt = require('prompt-sync')();
// let a = parseFloat(prompt("Enter the number:"));
// let temp = 0;
// if(a == 1){
//     temp = 0;
// }
// for(let i = 2; i<=a/2; i++){
//     if(a%i == 0){
//         temp++;
//         break;
//     }
// }
// if(temp == 0){
//     console.log("The number as prim number:");
// }
// else{
//     console.log("The number as not prim");
// }
// // FUnction
// let prim = (a) =>{
//     for(let i = 2; i<=a/2; i++){
//         if(a%i == 0){
//             temp++;
//             break;
//         }
//     }
//     if(temp == 0){
//         return 1;
//     }
//     else{
//         return 0;
//     }
// }
// let n = parseFloat(prompt("Enter the number:"));
// if(prim()!=0){
//     console.log("Prime");
// }else{
//     console.log("Not prime");
// }

let Class = {
    name:['Maaz', 'Fawad', 'Jawad'],
    marks:[900, 500, 1000], 
}
// Classical for loop
for(let i = 0; i<Object.keys(Class).length;i++){
    console.log(Object.keys(Class)[i]+":"+Class[Object.keys(Class)[i]]);
}
// For in loop
for(let i in Class){
    console.log(Class[i]);
}
// For of loop
// it will not work because the class is not iterable
// for(let i of Class){
//     console.log(Class[i]);
// }

let a = "MAAZkhan"
for(let b of a){
    console.log(a.split('').join('-'));
}
// While loop
let k = [2,3,4,5,6,7,8];
let g = 0;
let store = 0;
while(g<Object.keys(k).length){
    store+=k[g].toString();
    g++;
}
console.log(store.split('').join(','));
// do while loop
let m = [4,5,6,7,8,9]
let o = 0;
do{
    console.log(m[o]+">");
    o++;
}while(o<Object.keys(m).length);