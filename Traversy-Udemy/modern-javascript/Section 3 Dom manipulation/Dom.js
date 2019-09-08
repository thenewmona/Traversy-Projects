// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function (script) {
//   console.log(script.getAttribute('src'));
// });

// // console.log(val);
// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.URL;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms;

// val = document.links[0].className;
// val = document.links[0].classList[0];
// val = document.images;
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function (script) {
//   console.log(script.getAttribute('src'));
// });




// console.log(val);

//document.getElementById()
// console.log(document.getElementById('task-title'));

// //get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title')
// //change sytling

// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// //document.getElementById('task-title').style.display = 'none';

// //change content

// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Task';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

//document.querySelector()

// console.log(document.querySelector('task-list'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'green';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(odd)').style.background = '#ccd';

//document.getElemntsByClassName

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);
//document.getElementByTagName
// const lis = document.getElementsByTagName('li');
// console.log(lis);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';
// //lis.reverse();
// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = '${index}: Hello';
// });
// console.log(lis);
// //document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

//Traversing the DOM

let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;
//get child nodes 

val = list.childNodes; //returns a nodes list 

//get childern element nodes

//val = list.children; //returns a html collections or just the elements 
//you will use children more than child nodes 

val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;
val = list.children[1];

//childre of children 
val = list.children[3].children;
//First child
val = list.firtChild;
val = list.firstElementChild;
//Last child 

val = list.lastChild;
val = list.lastElementChild;

//count child elements
// val = list.childElementCount;

// //get parent node

// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // get next sibling

// val = listItem.nextSibling;
// //val = listItem.nextElementSibling;
// console.log(val);



// // 1. element
// // 2. Attribute (deprecated)
// // 3. Text node 
// // 8. Comment
// // 9. Document itself
// // 10. DocType 

// create element
// const li = document.createElement('li');
// //add class
// li.className = 'collection-item';
// // add id

// li.id = 'new-item';

// //add attribute 
// li.setAttribute('title', 'New Item');

// //create text node and append 
// li.appendChild(document.createTextNode('Hello World'));

// // create new link element
// const link = document.createElement('a');
// //add classes
// link.className = 'delete-item secondary-content';
// // add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// //append link into li 
// li.appendChild(link);

// //append li as child to ul 
// document.querySelector('ul.collection').appendChild(li);
// console.log(li);