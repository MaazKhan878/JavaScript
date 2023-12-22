// console.log // show  the elemet the tree
// console.dir // show the propertien
// document.body.firstChild(nodeName);  // the node name 
// let a = document.getElementsByTagName("span")[0];
// console.log(a);
// let b = document.getElementsByTagName("span")[0];
// console.dir(b);

//INNER HTML AND OUTER HTMl
// inner property allowed to get the html inside the element as a string
// work only for html nodes;
//first.innerHTML = "<b>Good the more</b>";
// outer Html
// Outer Html property contain the full html innerHTML + the element itself
// first.outerHTML ="<div>GOOD MAN GOOD</div>"
// document.body.firstChild.data // show data
// document.body.firstChild.nodeValue // value of the node show
// TEXT CONTENT 
// Provide access to the text inside the element only text minus tag
// console.log(document.body.textContent);

// first.hidden=false // It make the hidden property false 

// ATTRIBUTE METHODS
// let a = first.getAttribute("class"); // find his attribute of element and get the value of the attribute
// console.log(a);
// console.log(first.hasAttribute("class"));// return true beacus class as the attribute of first element
// console.log(first.hasAttribute("style"));// return false beacus its no the attribute the first class
// // first.setAttribute("hidden", "true"); // we can set any attribut to element;
// first.setAttribute("class", "true sachin"); // add class
// // Remove attribute 
// //first.removeAttribute("class", "true sachin");
// console.log(first.attributes); //  show the attribute of the element or id
// // Data*  attribute * mean you write anything on the * place 
// // id mean unique for a element
// // To createthe custom attribute by data*attribute ;
// console.log(first.dataset);
// console.log(first.dataset.player)
// console.log(first.dataset.game)

// Insertion method

// let a = document.getElementsByTagName('div')[0];
// // a.innerHTML= a.innerHTML + "<h1>Hello world!</h1>"

// // Create Element  by append child
//  let div = document.createElement('div');
// div.innerHTML = "<h1>Hello World!</h1>"
// // a.append(div); // go to the last of the container or its tag under
// // a.prepend(div); // go to the first
// // a.before(div);
// // a.after(div);
// // a.replaceWith(div); // replace the whole element;

// INsert adjacent Html/text/element

// first.insertAdjacentHTML('beforebegin', '<div class = "test">beforend</div>'); // befor from start
// first.insertAdjacentHTML('beforeend', '<div class = "test">beforend</div>'); // befor from end
// first.insertAdjacentHTML('afterbegin', '<div class = "test">beforend</div>'); // after from start
// first.insertAdjacentHTML('afterend', '<div class = "test">beforend</div>'); // after from end

// Node removel
//first.remove(); // remove the node completly

// class name and class List Important topic and concept
// first.className = "yellow text-black";  // it will replace the whole class of string  
// first.classList.remove('yellow');// it well remove the class to element
// first.classList.add('red');// add the class
// first.classList.togle('yellow')// it togle the class on the place of another if it present it well remove it if t not present it well add them
// console.log(first.classList.contains('yellow')); // it simple return false and true

// // SETTIMEOUT AND SETTIMEINTERVAL IMPORTANT
// // SET TIME OUT METHOD

// // document.write("Hello");// i want him to show some time after some time
// // let a = setTimeout(function() {
// //     alert("I am inside the setTimeout");
// // }, 5000)
// // let b = prompt("do you want to run set time out?");
// // if("n" == b){
// // clearTimeout(a);// stope the execution of time out;
// // }
// let sum = (a , b, c) =>{
//     console.log("Yes i am running "+ (a + b + c))
//     a + b; 
// }
// setTimeout(sum,1000,1,2,3);//setTimeout(function, seconds, value1 , value2)

// // Set Interval it run the function again and again
// // same syntx 

// setInterval(function(){
//     document.write("Maaz as king <br>");
// },2000);

let a = (a,b,c) =>{
    
 document.write(a+" + "+b+" + "+c+" ="+(a+b+c)+"<br>");

}
setInterval(a,2000,2,5,3);
// clear Interval
clearInterval(a,8000,2,5,3);