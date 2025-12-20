const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.getElementById('h1');

function onInput(e) {
  console.log(e.target.value);
}

function onCheck(e) {
  console.log(e.target.checked);
}

function onFocus(e) {
  console.log('Input is focus');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'red';
}

function onBlur(e) {
  console.log('Input is not focused');
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('change', onCheck);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);




