function insertAfter(newNode, referenceNode){
  // First way to do it
  // Esto lo que hace es insertar newNode como el último hijo de referenceNode
  /** (hijo)
   * referenceNode
   └── newNode
  */
  referenceNode.insertAdjacentElement('beforeend', newNode);  // referenceNode.appendChild(newNode);
  console.log(referenceNode.parentNode);

  // Esto lo que hace es insertar newNode como hermano
  /** (hijo)
   * referenceNode
     newNode
  */
   referenceNode.insertAdjacentElement('afterend', newNode);  // referenceNode.appendChild(newNode);
   console.log(referenceNode.parentNode);

  // Second way to do it
  // Esto lo que hace es insertar newNode antes del siguiente hermano de referenceNode
  // Como hijo de su padre
  /** (hermano)
   * referenceNode
     newNode
   */
  //referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);

/*
<!-- beforebegin -->
<p>
  <!-- afeterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/