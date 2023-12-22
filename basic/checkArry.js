
let prompt = require('prompt-sync')();
let a = prompt("Enter the arry: ");
let arry = a.split(",");
isAllnumber = true;
for(let i in arry){
    if(isNaN(arry[i])){
        isAllnumber = false;
    }
}
if(isAllnumber){
 console.log("as arry " +arry);
}
else{
 console.log("Not arry " ,arry);
}
//for(let i in arry){
  //  console.log(arry[i]);
//}