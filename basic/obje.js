// let object ={
//     name: "maaz",
//     ability: "fast learner",
//     specilist: "coding"
// }
// for(let a in object){
//     console.log("element are " + a + " as value "+ object[a]);
// }
let a = [2,5,67,43,34];
console.log(a.reverse());
let compare = (a , b)=>{
    return a -b;
}
let compare2 = (a , b)=>{
    return b - a;
}
console.log(a.sort(compare2));
console.log(a.sort(compare));
let b = [4,5,6,7,8];
let arry = b.map((value, index, array)=>{
    return value + index + array;
})
console.log(arry);


