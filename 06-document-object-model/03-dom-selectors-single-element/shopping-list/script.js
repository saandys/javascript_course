console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);

console.log(document.getElementById('app-title').getAttribute('id'));


// Set attributes
document.getElementById('app-title').setAttribute('title', 'My Shopping List');
document.getElementById('app-title').id = 'Shopping-List-Title';

const title = document.getElementById('Shopping-List-Title');

console.log(title);

// Get/change content
console.log(title.textContent);
title.textContent = 'My Shopping List';
console.log(title.innerText);
title.innerText = 'Updated Shopping List'; // Basically are the same
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'blue';
title.style.backgroundColor = 'lightgray';
title.style.padding = '5px';


// document.querySelector
console.log(document.querySelector('h1')); // First h1 only, not an array with all h1s
console.log(document.querySelector('#Shopping-List-Title'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Updated Item 2';
secondItem.style.color = 'red';

// Use these methods on others elements
const list = document.querySelector('ul');