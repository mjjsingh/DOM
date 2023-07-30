//console.log("hello ");
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// var items= document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent= "hello";
// items[1].style.frontWeight= "bold";
// //items[1].style.backgroundColor= "yellow";

// for(let i=0; i<items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4";
// }

var li= document.getElementsByTagName('li');
li[1].textContent= "hello";
li[2].style.frontWeight= "bold";
//items[1].style.backgroundColor= "yellow";

for(let i=0; i<li.length; i++){
    li[i].style.backgroundColor = "#f4f4f4";
}
//Qweryslectors
var header= document.querySelector("#main-header");
header.style.borderBottom= "solid 4px #ccc";

var input =document.querySelector('input');
input.value= "Hello World"
