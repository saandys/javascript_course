// querySelectorAll

const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

// listItems.style = 'color: red'; // This will not work because listItems is a NodeList

// listItems[1].style.color = 'red';

// listItems.forEach((item, index) => {
//     console.log(item.innerText);
//     item.style.color = 'red';

//     if(item === 1){
//         item.remove();
//     }

//     if(index == 0){
//         item.innerText = 'First Item (Updated)';
//     }
// });

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2);

const listItemsArray = Array.from(listItems2);
listItemsArray.forEach(element => {
    console.log(element.innerText);
});

// document.getElementsByTagName
const liElements = document.getElementsByTagName('li');
console.log(liElements3);

const liElementsArray = Array.from(liElements);
liElementsArray.forEach(element => {
    console.log(element.innerText);
});