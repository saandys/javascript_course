let output;

// Get child elements of the parent element
const parentElement = document.querySelector('.parent');
console.log(parentElement);
output = parentElement.children;
output = parentElement.children[1];
console.log(parent);

output = parentElement.children[1].innerText;
output = parentElement.children[1].className;
output = parentElement.children[1].nodeName;

parentElement.children[1].innetText = 'Changed Second Child';
parentElement.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'First Child Changed';
parent.lastElementChild.innerText = 'Last Child Changed';

// Get parent elements from a child
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '2px solid red';
child.parentElement.style.padding = '10px';
// Sibling elements
const secondChild = document.querySelector('.child:nth-child(2)');

output = secondChild;
output = secondChild.nextElementSibling;
output = secondChild.previousElementSibling;
console.log(output);


console.dir(output);