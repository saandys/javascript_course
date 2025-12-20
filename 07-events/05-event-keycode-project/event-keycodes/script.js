

// function changeValues(e){
//     // const key = document.querySelector('.key');
//     // const keyCode = document.querySelector('.keyCode');
//     // const code = document.querySelector('.code');

//     // const newkey = document.createTextNode(e.key);
//     // const newkeyCode = document.createTextNode(e.keyCode);
//     // const newCode = document.createTextNode(e.code);

//     // key.textContent(newkey);
//     // keyCode.appendChild(newkeyCode);
//     // code.appendChild(newCode);

//     const insert = document.getElementById('insert');

//     insert.innerHTML = `
//     <div class="key">
//           ${e.key === ' ' ? 'Space' : e.key}
//           <small>e.key</small>
//         </div>

//         <div class="key">
//           ${e.keyCode}
//           <small>e.keyCode</small>
//         </div>

//         <div class="key">
//           ${e.code}
//           <small>e.code</small>
//         </div>
//     `;
// }
// document.addEventListener('keyup', (e) => changeValues(e));

// Method 2

function showKeyCodes(e) {
    const insert = document.getElementById('insert');
    insert.innerHTML = '';

    const keyCodes = {
        'e.key': e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }

    console.log(keyCodes);
    for(let key in keyCodes) {
        const div = document.createElement('div');
        div.classList = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);

        insert.appendChild(div);
    }
}



window.addEventListener('keydown', showKeyCodes);