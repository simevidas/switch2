import daysSinceLaunch from './daysSinceLaunch.js';

// in desktop browers, set --ud based on page zoom level
if (window.matchMedia('(any-pointer: coarse)').matches === false) {
  // store DPR on very first visit (the assumption is that this is the DPR for page zoom 100%)
  if (!localStorage.getItem('DPR')) {
    localStorage.setItem('DPR', window.devicePixelRatio);
  }

  let updateUd = () => {
    let dpr0 = localStorage.getItem('DPR');
    let dpr = window.devicePixelRatio;
    let zoom = dpr / dpr0;
    let height = (zoom * window.innerHeight) / 100;

    document.documentElement.style = `--ud: ${height}px`;
  };

  // set #grid height on page load based on detected page zoom level
  updateUd();

  // update #grid height whenever the user resizes the browser window or viewport
  window.addEventListener('resize', updateUd);
}

// adding <html class="js"> makes the JS-based elements appear on the page
document.documentElement.classList.add('js');

// position SMB sprite to mark the current date
document
  .querySelector('#today')
  .setAttribute(
    'style',
    `--day: ${daysSinceLaunch(new Date().toISOString().slice(0, 10))}`
  );

document.addEventListener('click', (ev) => {
  // toggling between games that occupy the same place
  if (ev.target.matches('.multi')) {
    let game = ev.target.closest('.game');
    let style = game.getAttribute('style');
    let games = Array.from(document.querySelectorAll(`[style="${style}"]`));
    let nextIndex = games.indexOf(game) + 1;
    if (!games[nextIndex]) nextIndex = 0;
    for (let g of games) {
      g.toggleAttribute('hidden', games.indexOf(g) !== nextIndex);
    }
  }

  // full screen control
  else if (ev.target.matches('.switch')) {
    if (ev.target.checked) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen();
    }
  }
});

{
  let fullscreenSwitch = document.querySelector('.switch');

  if (document.fullscreenEnabled !== true) {
    fullscreenSwitch.closest('#fullscreen').hidden = true;
  } else {
    let updateFullscreenSwitch = () => {
      fullscreenSwitch.checked = Boolean(document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', updateFullscreenSwitch);
    window.addEventListener('pageshow', updateFullscreenSwitch);
  }
}

const wrapper = document.getElementById('wrapper');
if (wrapper) {
  window.addEventListener(
    'wheel',
    function (e) {
      if (e.deltaY !== 0) {
        e.preventDefault();
        wrapper.scrollLeft += e.deltaY * 1.5;
      }
    },
    { passive: false }
  );
}
