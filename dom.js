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

// var li= document.getElementsByTagName('li');
// li[1].textContent= "hello";
// li[2].style.frontWeight= "bold";
// //items[1].style.backgroundColor= "yellow";

// for(let i=0; i<li.length; i++){
//     li[i].style.backgroundColor = "#f4f4f4";
// }
//Qweryslectors
// var header= document.querySelector("#main-header");
// header.style.borderBottom= "solid 4px #ccc";

var input =document.querySelector('input');
input.value= "Hello World"

var submit=document.querySelector('input[type="submit"]');
submit.value="SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'blue';

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color = 'coral';

//QWERYSELECTORALL
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent ='Hello';

var odd= document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++){
odd[i].style.backgroundColor ='#f4f4f4';
}
var even= document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<even.length; i++){
even[i].style.backgroundColor ='#ccc';
}