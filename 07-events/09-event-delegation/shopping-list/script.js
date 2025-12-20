const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(item => {
//   item.addEventListener('click', (e) => {
//     console.log(e.target);
//   })
// })

list.addEventListener('click', (e) => {
  if(e.target.tagName === 'li') {
    e.target.remove();
  }
})

list.addEventListener('moseover', (e) => {
  if(e.target.tagName === 'li') {
    e.target.style.color = 'red';
  }
})