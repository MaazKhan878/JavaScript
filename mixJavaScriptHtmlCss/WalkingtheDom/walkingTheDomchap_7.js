// Walking the DOM
/* Through dom we manipulate the css and html by walking on
the file and pick the element
like dacument.getElementByClass("maaz")[3].body.style.color="red;"
*/
//node present in the html like text node botstrep element node comment node 
 //document.getElementById("p").style.color="red";
 //DOM a tree representation where present children parents etc
 
 // WHAT AS CHILDERN 
 // Every thing inside the tag as the childern of that tag
 //Child node are the direct childern like father and son
 // siblings the one father and two son these are sibling
 // decended node the childern of the childern of father
 // HOW IT ACCESSING
//  console.log(document.body.firstChild);//accessing the first child
//  console.log(document.body.childNodes[0]);//accessing the first child
//  console.log(document.body.childNodes );//accessing the  all child
//  console.log(document.body.lastChild);//accessing the last child
//console.log(document.body.childNodes[body.childNodes.length - 1]);//accessing the last child
//  document.getElementById("p").style.color="red";
// console.log(document.body.hasChildNodes());// if Nodes present it return thr true if not false
// let arr = Array.from(document.body.childNodes);// Form the array from the child
// console.log(arr); // Print array
// childe nodes look like a arry but its not actually a array but a callection we use array.form method to work
// but all the method of array not working on array
// we have node list not a array there for we cannot use the array method
// Parent and Sibling in DOM MAnipulation
// we cannot use the array method on Node
// DOM COLLECTION
// $0 mean repered to this element 
// $1 slect the element which selected befor
// like $0.childNodes show all the nodes
// They are live element 
// you can use the for loop to iterate
// SIBLING AND PARENT 
// same parent nodes
// head left sibling body and body right sibling head
// $0.nextSiling the will sho the next sibling
// console.log(document.body.firstChild);
// let a = document.body.firstChild;
// console.log(a.parentNode); // return the all the node
// console.log(a.parentElement); // return valid html element except return null
// console.log(a.firstChild.nextSibling); // return the child and his sibling
// How to avoid the text node
// ELEMENT ONLY NAVAGITION
// let b = document.body;
// console.log("first child of b as",b.firstChild);// show the text also if thery are element or not; 
// console.log("first child of b as",b.firstElementChild);// show the element only
// console.log("first child of b as",b.lastElementChild);
// const change = () =>{
//     document.body.firstElementChild.style.backgroundColor="green";
// }

//  TABLE BASED NAVIGATION
// let t = document.body.firstElementChild.firstElementChild;
// console.log(t);
// console.log(t.rows);// collection of item
// console.log(t.tHead.firstChild);// t.tHead represent the thead and .firstChild represent the the first child of the thead
// console.log(t.tFoot);
// console.log(t.caption);//represent the caption
// console.log(t.tBodies);
// console.log(t.rows[1].rowIndex); // we can find the index of tr(table row)
// console.log(t.tBodies);
// // typeof windows = object typeof document = object

// DOM SEARCH
//how to search 
// Funtion 1 search dom function:
// Change the card title red forexample
// Searching Dom
// DOM navigation helful when the are very close to each other if they are not close to each other we have more method to search
// //Get element by Class
// let ctitle = document.getElementsByClassName("card-title")[0];
// ctitle.style.color="red";
// // Get Element by ID
// let ctitle = document.getElementById("title"); // only want the id name NOTE DONNOT FORGET ABOUT S IN CLASS ELEMENTS
// ctitle.style.color="blue";
// Query Selector
// let ctitle = document.querySelectorAll(".card-title");
// ctitle[0].style.color="Red";
// ctitle[1].style.color="blue";
// ctitle[2].style.color="green";
// console.log(ctitle);

// document.querySelector(".that").style.color="black";
// document.querySelector(".that").style.background="green";
// By tag name
// console.log(document.querySelector(".card").getElementsByTagName("a"));

// By Name to find DOM
// console.log(document.getElementsByName("search"))
// let a = document.body.querySelectorAll(".dropdown-item");
// console.log(a)
// a[0].style.color = "red";
// a[1].style.color = "green";

// let a = document.body.firstElementChild.firstElementChild.firstElementChild;
// console.log(a.childNodes);

//DOM MATCHES CLOSES AND CANTAINS METHOD
// MATCHES METHOD
// the if element match given selector or not it return false and True
// let a = document.getElementById("id1");
// // console.log(a);
// // console.log(a.matches(".box"));

// // DOM Closest Css to search element in ancestor 
// console.log(sp1.closest(".box")); // to check the element in ancestor
// // It also return itself  
// console.log(sp1.contains(id1)); // if the element a present in element b it will return true or false
// // contain find the element in the class 
// // console.log(a.cantains(".sp1"));
// CHAPTER 7 END