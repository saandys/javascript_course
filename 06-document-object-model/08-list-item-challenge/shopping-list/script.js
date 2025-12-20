// Quick & Dirty
function createListItem(item) {
    // const li = `<li>${item}</li>`;
    // document.querySelector('.items').appendChild(li);  // Error bc li is not a node

    const li = document.createElement('li');
    li.innerText = ` ${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
}


// Clean & Performant -> Better way
function createNewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    console.log(button);
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
}


createListItem('Eggs');
createNewItem('Cheese');
