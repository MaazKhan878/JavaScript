// AUTHOR MAAZ KHAN
// COURSE WRITE BY MAAZ KHAN
// LECTURE TAKE FROM BELOVED TEACHER HARRY
// const prompt = require('prompt-sync')();
// let a = parseFloat(prompt('Enter the number: '));
// let b = parseFloat(prompt("Enter the number: "));
// let area = a* b;
// console.log(`The number as ${area}`);
// primitive data type
// nn bb ss u
// let a = null; //  null (nothing present)
// let b = 345; // number
// let c = true;// boolen
// let d = BigInt("3") + BigInt("2");// BigInt
// let e = "Hello"; // string
// let f = Symbol("i am maaz khan ") // symbol
// let g // undefine
// console.log(a, b, c, d, e, f, g);
// // object non premitive data type
// const item = {
//     "harry": true,
//     "maaz": false,
//     "sudais": 64,
//     "maaz swathy": undefined,
// }
// console.log(item["harry"]);
// const object ={
//     name: "Car",
//     price: "2 Crore",
//     Model: "2050",
//     Tage: "Don't Jelous"
// }
// console.log(object);

//OPERATOR OF JAVASCRIPT

// 77; // we can write like that 
// "Hello world" // string
// false// boleen etc
// let prompt = require('prompt-sync')();
// let a = parseFloat(prompt("Enter the first number: "));
// let b = parseFloat(prompt("Second the number: "));
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);
// console.log("a ** b = ",a**b);
// console.log("++a = ",++a);
// console.log("a++ = ",a++);
// console.log("--a = ",--a);
// console.log("a-- = ",a--);
// console.log("a = ",a);

// // assignment operator
// let x = 5;
// x +=a;
// let z = 5;
// z -= b; 
// console.log(x, z);
// // comparing operator
// let c = "6";
// console.log("compa == compb", a == c); // it cannot deffereniat b/t string and intege
// console.log("compa === compb", a === c); // string defferentiat
// console.log("compa != compb", a != b);
// console.log("compa !== compb", a !== b);
// console.log("compa >= compb", a >= b);
// console.log("compa <= compb", a <= b);
// console.log("compa > compb", a > b);
// console.log("compa < compb", a < b);

// // logical operator
// let y = 5;
// console.log(a<x && y==1 );
// console.log(a==x || y==2);
// console.log(a!=x || y==5);
// console.log(a!=x && y==6);
// console.log(a>x && y==5);

// Conditional statement
// let age;
// do{
// let prompt = require('prompt-sync')();
// age = parseInt(prompt("Enter the your age: "));
// if(age<18){
//     console.log("Teenager");
// }
// else if(age>=18 && age<25){
//     console.log("Adult");
// }
// else{
//     console.log("Man");
// }
// }while(age!=0);
 let prompt = require('prompt-sync')();
// let x = parseInt(prompt("Enter the Value: "));

// let fact = 1;
// for(let i = 1; i<=x; i++){
//     fact *=i;
//     console.log(fact);
// }


// while(1){
//     let x = parseInt(prompt("Enter the first Value: "));
//     let y = parseInt(prompt("Enter the second Value: "));
//     let op = prompt("Enter the operator:(+,-,/,%,*,**): ")
//     switch(op){
//         case "+":
//             console.log("x + y = ",x + y);
//             break;
//         case "-":
//             console.log("x - y = ",x - y);
//             break;
//         case "*":
//             console.log("x * y = ",x * y);
//             break;
//         case "/":
//            console.log("x / y = ",x / y);
//            break;
//         case "**":
//            console.log("x ** y = ",x ** y);
//            break;
//         case "%":
//            console.log("x % y = ",x % y);
//            break;
//         default:
//             console.log("Enter the wrong operator:");
//          break;
//     }
// }

// TERNARY OPERATOR
// let x = 10;
// console.log(x<10 ? "Fail" : "Passed");
// console.log(x>8 ? "Passed" : "failed");
// console.log(x<20? "Failed" : "Passed");
// let num = 10;
// let num1 = 30;
// let num3 = 20;
// let max = num > num1? num : num1;
// max = max > num3? max: num3;
// let min = num < num1? num: num1;
// min = min < num3? min: num3;
// console.log("Max = ",max,"\nMin = ",min);

// FOR LOOP ITS TYPE LIKE FOR LOOP, FOR OF LOOP, FOR IN LOOP
// FOR LOOP
// let a = 10;
// let pr = 1;
// let fac  = 1;
// for(let i = 1; i<=a; i++){
//     pr = 2 * i;  
//     fac *= i; 
//     console.log(i ,"X 2 = ", pr);
//     console.log("Square of ",i ," = ",i*i);
//     console.log("fac of ",i," = ", fac);
// }

//  FOR IN LOOP ALSO USE FOR ARRAY
// let scope to a block and Var scop globally
// for in loop print the value of all object
// let obj = {
//     maaz: 990,
//     fawad: 1080,
//     salman: 1000,
//     shakir: 1000
// }
// for(let a in obj){
//     console.log("Marks of " + a + " are " + obj[a]);
// }

// FOOR OF LOOP USE FOR STRING AND ARRAY
// ARRAY TO CHAR
// for(let b of "MAAZ"){
//     console.log(b);
// }

//while loop
// let fact = 1;
// let i = 1;
// while(i<=10){
//     fact*=i;
//     console.log("Fact of ",i,"as = ",fact);
//     i++;
// }

// let  star = 7;
// let space = 0;
// for(let line = 1; line<=7; line++){
//     let string="";
//     for(let s = 1; s<=space; s++){
//         string+=" ";
//     }
//     for(let st = 1; st<=star; st++){
//             string+="*";
//     }
//     console.log(string);
//     if(line<=7/2){
//         star-=2;
//         space++;
//     }
//     else{
//         star+=2;
//         space--;
//     }
    
// }

// let star = 1;
// let space = 7/2;
// for(let line = 1; line<=7; line++){
//     let printer = "";
//     for(let s = 1; s<=space; s++){
//         printer += " ";
//     }
//     for(let st =1; st<=star; st++){
//         printer += "*";
//     }
//     console.log(printer);
//     if(line<=7/2){
//         star+=2;
//         space--;
//     }
//     else{
//         star-=2;
//         space++;
//     }

// }

// FUNCTION of JAVA SCRIPT

// function recur(n){
//     if(n==1){
//         return 1;
//     }
//     return n * recur(n-1);
// }
// // Another function type called Arrow function
// const fiboncci=(n)=>{
//     if(n==0){
//         return 0;
//     }
//     else if(n==1){
//         return 1;
//     }
//     return fiboncci(n - 1) + fiboncci(n - 2);
// }
// let sum = (n) =>{
//     if(n == 0){
//         return 0;
//     }
//     return n + (n-1);
// }
// let a = parseFloat(prompt("Enter the number: "));
// console.log("factorial of ",a,"as", recur(a));
// console.log("Fibonacci of ",a,"as = ", fiboncci(a));
// console.log("Sum = ",sum(a));

// STRING 
// let a = "Harry as the best Teacher";
// console.log(a);
// console.log(a.length);
// a = 'Maaz as a programmer';
// console.log(a[0]);
// console.log(a);
// let best = {
//     name: "maaz",
//     teacher: "Harry",
//     good: "NICE"
// }
// for(let i = 0; i<Object.keys(best).length;i++){
//     console.log("the " + Object.keys(best)[i] + " as " + best[Object.keys(best)[i]]);
// }

// TEMPLET LITERALS
// BACKTECKS USED
// let king = "MAAZ";
// let army = "Warrior";
// let full = `the King ${king} have army of ${army}`;
// console.log(full);

// //ESCAPE SEQUENCE SENTENCE CHARACTER
// let a = 'Maaz\'fawad '
// console.log(a);
// a = 'maaz\nfawad'
// console.log(a);
// a = "Maaz\tFawad";
// console.log(a);
// a = "Maaz\bFawad";
// console.log(a);

// String length
// let a = "Maaz\"" // \" is one character
// console.log(a);
// console.log(a.length);
// // convert upper case
// console.log(a.toUpperCase());
// // convert to lower case
// console.log(a.toLowerCase());
// // break string from point where whant to start and end
// console.log(a.slice(0,9));
// // replace string
// console.log(a.replace("Maaz", "fawad"));
// // concat method
// // connect string with each other
// let friend = "Namman"
// console.log(a.concat("is a friend of "+friend + " ok"));
// // Trim method
// // remove spaces
// let friend2 = "       Sudaias     ";
// console.log(friend2)
// // trim
// console.log(friend2.trim());
// // string as immutable 
// let name = "Maaz";
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);

// let googleboy = "The baster man see the wolf";
// let stor = "";
// for(let i = 0; i<googleboy.length;i++){
//    stor += (googleboy[i]);
// }
// console.log(stor);

// ARRAY THE COLLECTION OF ITEM
// HOLD MORE THAN ONE VALUE 
// let a = [1,2,3];
// let marks = [98, 99, 67, 88,null,false,true,"OHOO"];
// // we can add length in arry and item
// console.log(a)
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);
// console.log(marks[5]);
// console.log(marks[6]);
// console.log(marks[7]);
// console.log(marks[8] = 89);
// console.log(marks[9] = 97);
// console.log(marks[10] = 99);
// console.log(marks[11] = 100);
// // Array as Mutable it value can be change
// // arry object
// for(let i = 0; i<marks.length;i++){
//     console.log(marks[i]);
// }
// console.log(marks.length);

// ARRY METHODS
// let num = [1,2,3,4,12,16,6];
// // arry number convert to string
// let b = num.toString();
// console.log(b); 
// // Join by something Formatting like 1,3,5 by join 1-2-3
// let c = num.join("-");
// console.log(c);
// // POP method PoP out the last number and return the pop element
// console.log(num.pop());
// console.log(num);
// let a = num.pop();
// console.log(num); 
// console.log(a);
// // PUSH Add new element to last order
// let push = num.push(99);
// // add daba or length
// console.log(num,push);
// let pop = num.pop();
// console.log(num);
// // SHIFT REMOVE THE NUMBER FROM THE START OF THE ARRY
// let shift = num.shift();
// console.log(num);
// // UNSHIFT ADD LENGHT TO START OF THE ARRY
// let unshif = num.unshift(45);
// console.log(num);

// DELET METHOD OR OPERATOR
// let num = [1,2,3,5,8,3,4,1];
// delete num[4];
// // Arry lenght cannot change by the DELETE
// console.log(num);
// num[4] = 9;
// console.log(num);
// // CONCAT METHOD TO JOIN THE TWO OR MORE ARRY VALUE TO form new arry
// let num2 = [2,4,5,7]
// let joiner = num.concat(num2);
// console.log(joiner);
// let num3 = [122,233,455];
// let joinMore = num.concat(num2,num3);
// console.log(joinMore);
// let a = "Harry";
// let b = "Maaz";
// let c = a.concat(b);
// console.log(c);
// // SORTING METHOD IT MODIFIED THE ORIGNAL ARRY ACCORDING APHABATICAL METHOD
// joinMore.sort();
// console.log(joinMore);
// // ASSENDING MATHO OF SORTING BY COMPARE METHOD MIN TO MAX
// let compare =(a,b)=>{
//     return a - b;
// }
// joinMore.sort(compare);
// console.log(joinMore);

// // DESANDING MAX TO MIN SORT WITH COMPARE FUNCTION
// let compare2 =(a,b)=>{
//     return b - a;
// }
// joinMore.sort(compare2);
// console.log(joinMore);
// // reverse method to REVERSE ARRY
// joinMore.reverse();
// console.log(joinMore);
// // SPLICE AND SLICE METHOD TO ADD AND DELET ITEM 
// //(2,3,223,455,234) SHOW THAT THE FIRST NUMBER FOR TO TAKE START FROM POSITION 2 AFTER THAT REMOVE 3 NUMBER OR SLOT FROM ARRY AND ADD MORE VALUE
// let mn = joinMore.splice(2,3,122,104,143,133); 
// console.log(mn); // SHOW WHICH ITEM DELETE
// // Slice METHOD GIVE STARTING POINT AND END POINT CREAT NEW ARRY And removing the element from the previous arry
// let pmn = joinMore.slice(2,6);
// console.log(joinMore);
// console.log(pmn);

// ARRY WITH LOOPS
// CLASSICAL FOR LOOP
// let num = [2,4,5,6,7,8];
// for(let i = 0; i<num.length;i++){
//     console.log(num[i] * num[i]);
// }
// console.log('\n\n\n');
// // FOR EACH LOOP 
// // SYNTX ARRY.FOREACH
// num.forEach((key) => {
//     console.log(key * key);
// })
// // ARRY FROM METHOD USE TO CREAT ARRY FROM ANOTHER OBJECT
// // SYNTX ARRY.from(FILE NAME)
// let name = "Maaz khan"
// let arr = Array.from(name);
// console.log(arr);
// // FOR OF LOOP 
// for(let i of num){
//     console.log(i);
// }
// //FOR IN LOOP FOR ARRY IT PROVIDE KEYS IN OBJECT ALSO THERE
// for(let i in num){
//     console.log(num[i]);
// }

// MAP AND REDUCE METHOD OF MODERN JAVA SCRIPT
// MAP METHOD  mad new arry and return
// let arr =[45,23,12];
// let a = arr.map((value, index,array)=>{
//     console.log(value,index,array) // value show value of item index show position like 0, 1,2 and array show the whole arry
//     return value + (index * 6); // can change the value etc
// })
// console.log(a);
// // FILTER METHOD WE CAN FILTER TO TAKE HAS NUMBER OF DESIRED
// let a2 = arr.filter((a)=>{   // CREATE NEW ARRY FROM PREVIOUS ARRY
//     return a < 23;
// })
// console.log(a2);

// // REDUCE METHOD 
// let a3 = arr.reduce((h1 , h2)=>{  // ADD FIRST AND SECOND VALUE THEN THE RESULT ADD WIT THE #RDD >>>>
//     return h1 + h2;
// })
// console.log(a3);
// // JAVA SCRIPT WE CAN USE A FUNCTION LIKE A VARIABLE
// const ret = (h1, h2) =>{
//     return h1 * h2;
// }
// let ar = arr.reduce(ret); // Like that
// console.log(ar);

