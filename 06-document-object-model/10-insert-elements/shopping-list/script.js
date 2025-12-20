// insertAdjacentElement Example
function insertAdjacentElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example
function insertText(){
  const item = document.querySelector('li:first-child');

  //item.insertAdjacentElement('afterend', 'insertAdjacentText');
  // ('afterend', 'insertAdjacentText');
  item.insertAdjacentText('beforebegin', 'insertAdjacentText');

}

// insertAdjacentHTML Example
function insertHTML(){
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}
// insertBefore Example
function insertBefore(){
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');
  /*
    n sería el index del hijo que se está recorriendo
    Por ejemplo, para coger las filas impares de una tabla HTML: 1, 3, 4
    Se haría nth-child(2n+1)
      1 = 2(0)+1
      3 = 2(1)+1
      5 = 2(2)+1

    Por ejemplo para los primeros tres elementos de un grupo de hermanos
    Se haría nth-child(-n+3)
      1 = -(1)+3
      2 = -(2)+3
      3 = -(3)+3
      ¿Y si hay más? =>      4 = -(4)+3 = -1 (no existe)
  */

      ul.insertBefore(li, thirdItem);
}


insertAdjacentElement();
insertText();
insertHTML();
insertBefore();
/*
<!-- beforebegin -->
<p>
  <!-- afeterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/