// // Q1: write the program that take input of age and alert him it can drive or not

// const canDrive = (age) =>{
//   return age>=18? true : false;
// }
// do{
//   let age = prompt("Enter your age: ");
//   age = Number.parseInt(age);
//   if(age<0){
//     //Q2: age negative
//     console.error("You enter the age negative!");
//   }
//   else{
//       if(canDrive(age)){
//         alert("You can drive");
//       }
//      else{
//          alert("You cannot drive please wait for some years");
//      }
//   }
//   // Q3: confirm that user want to enter input again or not
//   var choice  = confirm("You want to see prompt again...");
// }while(choice);

// //Q4: User enter the value grater then 4 the url change to google.com
// let num = prompt("Enter the number: ");
// Number.parseInt(num);
// const url = (num) =>{
//   return num>4? false:true;
// }
// if(url(num)){
//   location.href = "https://codewithharry.com";
// }
// else{
//   location.href = "https://www.google.com/";
// }
// Q5: user chose background color
// // EASY METHOD Q5:
// let color = prompt("Enter the color: ");
// document.body.style.background = color