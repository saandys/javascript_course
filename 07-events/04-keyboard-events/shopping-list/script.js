const itemInput = document.getElementById('item-input');

const onKeyPress = e => { 
  console.log('keypress');
}

const onKeyUp = e => { 
  console.log('keyup');
}

const onKeyDown = (e) => { 
  console.log('si', e.key);
  // if(e.key === 'Enter') {
  //   alert('You pressed enter');
  // }

  // keyCode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes
  if(e.keyCode === 13) {
    alert('You pressed enter');
  }

  console.log(e.code);

  if(e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  console.log('Shift: ' + e.shiftKey);
  console.log('control: ' + e.ctrlKey);

  console.log('alt: ' + e.altKey);

  if(e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }
}

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);

itemInput.addEventListener('keydown', onKeyDown);
