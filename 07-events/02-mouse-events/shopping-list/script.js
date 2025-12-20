const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => 
{
  if (document.body.style.backgroundColor !== 'purple'){
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white'; // Changes the text color
  }else{
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';

  }
}

const onRightClick = () => console.log('right event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse Over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag  event');
const onDragEnd = () => console.log('drag end event');

// Event Listeners
 logo.addEventListener('click', onClick);
 logo.addEventListener('dblclick', onDoubleClick);
 logo.addEventListener('contextmenu', onRightClick);
 logo.addEventListener('mousedown', onMouseDown);
 logo.addEventListener('mouseup', onMouseUp);
 logo.addEventListener('wheel', onMouseWheel);
 logo.addEventListener('mouseover', onMouseOver);
 logo.addEventListener('mouseout', onMouseOver);
 logo.addEventListener('dragstart', onMouseOver);
 logo.addEventListener('drag', onDrag);
 logo.addEventListener('dragend', onDragEnd);





