let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0];
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[0].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Changed Text From Script';
output = parent.childNodes[3].style.color = 'blue';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

// Parent node

const child = document.querySelector('.child');

output = child.parentNode; // <div class="parent">...</div>
output = child.parentElement; // is de the same as parentNode for element nodes

child.parentNode.style.backgroundColor = '#ccc';

child.parentNode.style.padding = '10px';

// Siblings

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
output = secondItem.previousSibling;
console.log(output);