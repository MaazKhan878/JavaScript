// let marks={
//     maaz: 65,
//     fawad: 70,
//     khan: 20
// }
// work perfect 
// for(let a in marks){
//     console.log("Studen Name "+a+ " Marks as ",marks[a]);
// }
// another method
// let marks={
//     Maaz: 65,
//     Fawad: 70,
//     Sudais: 20,
//     Good: 400

// }
// for(let i = 0; i<Object.keys(marks).length;i++){
//     console.log("The marks of "+ Object.keys(marks)[i] +" are " + marks[Object.keys(marks)[i]])
// }

// easy one Method
// let marks = {
//     maaz : 900,
//     Ali : 500,
//     Suban : 800
// }
// for(let keys in marks){
//     console.log("The marks of " + keys + " are "+marks[keys]);
// }

// Q3 
// const prompt = require('prompt-sync')();
// let a = 0;
// do{
//     let a = parseFloat(prompt("Enter the number: "));
//     if(a==3){
//         console.log("You enter correct number:");
//         break;
//     }
//     else{
//         console.log("Enter incorrect number. Try again");
//     }

// }while(1);

// Mean find
let mean = (a,b,c,d,e)=>{
    return (a + b + c + d + e)/5;
}
let a = 5, b = 7, d = 4, e = 9, c = 10;
console.log("The mean as "+mean(a,b,c,d,e)); 