import gamesHTML from './generate.js';

let placeholder = document.querySelector('#placeholder');

placeholder.insertAdjacentHTML('afterend', gamesHTML());
placeholder.remove();
