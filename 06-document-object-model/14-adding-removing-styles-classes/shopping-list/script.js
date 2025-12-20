const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className
  // console.log(itemList.className);
  // text.className = 'dark'; // Overwrite 

  // classList
  console.log(itemList.classList);
  itemList.classList.forEach((c) => console.log(c));

  // text.classList.add('dark');
  // text.classList.remove('card');

  // text.classList.toggle('hidden'); // Esto haceq ue al pulsar se añada dark y cuando le vuelves a dar que se quite
  text.classList.replace('card', 'dark');

  // Change style
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if(index === 2) {
      item.style.color = 'blue';

    }
  });

}

document.querySelector('button').onclick = run;
