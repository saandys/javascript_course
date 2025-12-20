const logo = document.querySelector('img');

function onClick(e) {
  // console.log(e.currentTarget);
  // console.log(e.target);
  // e.target.style.backgroundColor = 'black';
  // console.log(e.type);      // Tipo de evento (click, dblclick, mousemove, etc.)

  // console.log(e.timeStamp); // Tiempo (en ms) desde que se cargó la página hasta el evento

  // console.log(e.clientX);   // Posición X del cursor respecto a la ventana visible (viewport)
  // console.log(e.clientY);   // Posición Y del cursor respecto a la ventana visible (viewport)

  // console.log(e.offsetX);   // Posición X del cursor relativa AL ELEMENTO donde se hizo click
  // console.log(e.offsetY);   // Posición Y del cursor relativa AL ELEMENTO donde se hizo click

  // console.log(e.pageX);     // Posición X del cursor respecto a toda la página (incluye scroll)
  // console.log(e.pageY);     // Posición Y del cursor respecto a toda la página (incluye scroll)

  // console.log(e.screenX);   // Posición X del cursor respecto a la pantalla física
  // console.log(e.screenY);   // Posición Y del cursor respecto a la pantalla física
}

logo.addEventListener('click', onClick)

// document.body.addEventListener('click', function (e) {
//   console.log(e.currentTarget);
//   console.log(e.target);
// })

document.querySelector('a').addEventListener('click',
  function (e) {
    e.preventDefault(); // lo paramos el evento

    console.log('Link was clicked');
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
  }
)
/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to 
  (Thede are the same in this case)
- `type` - The type os event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

