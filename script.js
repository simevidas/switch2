{
  // category: 1 exclusive, .1 retail, .2 digital-only; 2 “edition”, .1 “plus”, .2 plain
  // developer: 1 Nintendo, 2 subsidiary, 3 close partner, 4 other developer
  // price: [ game, upgrade pack ] in tens of USD/EUR

  // IMPORTANT: sort alphabetically
  let games = [
    {
      name: 'Donkey Kong Bananza',
      path: 'donkey-kong-bananza',
      category: 1.1,
      release: '2025-07-17',
      price: [7],
      developer: 1,
    },
    {
      name: 'Drag x Drive',
      path: 'drag-x-drive',
      category: 1.2,
      release: '2025-08-14',
      price: [2],
      developer: 1,
    },
    {
      name: 'Hyrule Warriors: Age of Imprisonment',
      path: 'hyrule-warriors-age-of-imprisonment',
      category: 1.1,
      release: 'this Winter',
      developer: 4,
      order: 2,
    },
    {
      name: 'Kirby Air Riders',
      path: 'kirby-airriders',
      category: 1.1,
      release: '2025',
      developer: 3,
      order: 1,
    },
    {
      name: 'Kirby and the Forgotten Land – Nintendo Switch 2 Edition + Star-Crossed World',
      path: 'kirby-and-the-forgotten-land-switch-2-edition',
      category: 2.1,
      release: '2025-08-28',
      price: [8, 2],
      developer: 3,
    },
    {
      name: 'Mario Kart World',
      path: 'mario-kart-world',
      category: 1.1,
      release: '2025-06-05',
      price: [8],
      developer: 1,
      noline: true,
    },
    {
      name: 'Metroid Prime 4: Beyond – Nintendo Switch 2 Edition',
      path: 'metroid-prime-4-beyond-nintendo-switch-2-edition',
      category: 2.2,
      release: '2025',
      developer: 2,
      order: 1,
    },
    {
      name: 'Nintendo GameCube – Nintendo Classics',
      path: 'nintendo-gamecube-nintendo-classics',
      category: 1.2,
      release: '2025-06-05',
      price: [0],
      nso: true,
      developer: 1,
      multi: 2,
      noline: true,
    },
    {
      name: 'Nintendo Switch 2 Welcome Tour',
      path: 'nintendo-switch-2-welcome-tour',
      category: 1.2,
      release: '2025-06-05',
      price: [1],
      developer: 1,
      multi: 1,
      noline: true,
    },
    {
      name: 'Pokémon Legends: Z-A – Nintendo Switch 2 Edition',
      path: 'pokemon-legends-z-a-nintendo-switch-2-edition',
      category: 2.2,
      release: '2025-10-16',
      price: [7, 1],
      developer: 3,
    },
    {
      name: 'Splatoon Raiders',
      path: 'splatoon-raiders',
      category: 1.1,
      release: 'TBD',
      developer: 1,
      order: 4,
    },
    {
      name: 'Super Mario Party Jamboree – Nintendo Switch 2 Edition + Jamboree TV',
      path: 'super-mario-party-jamboree-nintendo-switch-2-edition',
      category: 2.1,
      release: '2025-07-24',
      price: [8, 2],
      developer: 2,
    },
    {
      name: 'The Duskbloods',
      path: 'the-duskbloods',
      category: 1.1,
      release: '2026',
      developer: 4,
      order: 3,
    },
    {
      name: 'The Legend of Zelda: Breath of the Wild – Nintendo Switch 2 Edition',
      path: 'the-legend-of-zelda-breath-of-the-wild-nintendo-switch-2-edition',
      category: 2.2,
      release: '2025-06-05',
      price: [8, 1],
      developer: 1,
      multi: 2,
    },
    {
      name: 'The Legend of Zelda: Tears of the Kingdom – Nintendo Switch 2 Edition',
      path: 'the-legend-of-zelda-tears-of-the-kingdom-nintendo-switch-2-edition',
      category: 2.2,
      release: '2025-06-05',
      price: [8, 1],
      developer: 1,
      multi: 1,
    },
  ];

  // generate HTML for games
  {
    let html = '';
    let toStripe = {
      1.1: 1,
      1.2: 2,
      2.1: 3,
      2.2: 4,
    };
    let toDevIcon = {
      1: 'Ⓝ',
      2: 'Ⓝ',
      3: '★',
      4: '',
    };
    let toPriceIcon = {
      1: '①',
      2: '②',
    };
    let toMultiIcon = {
      1: '●○',
      2: '○●',
    };
    let daysSinceLaunch = (datestr) => {
      let date0 = +new Date('2025-06-05T00:00:00Z');
      let date = +new Date(`${datestr}T00:00:00Z`);
      return (date - date0) / (24 * 60 * 60 * 1000);
    };

    for (let game of games) {
      let isDated = game.release.match(/^\d{4}-\d{2}-\d{2}$/);
      html += `
<div class="game ${game.nso === true ? 'nso' : ''}" style="--stripe: ${
        toStripe[game.category]
      }; ${
        isDated
          ? `--days: ${daysSinceLaunch(game.release)}`
          : `--order: ${game.order}`
      }" ${game.multi && game.multi > 1 ? 'hidden' : ''}>
  <a href="https://www.dekudeals.com/items/${game.path}">
    <img src="images/${game.path}.jpg" alt="${game.name}">
  </a>
  ${
    game.price
      ? `<div class="price">${game.price[0]} ${
          game.price[1] ? toPriceIcon[game.price[1]] : ''
        }</div>`
      : ''
  }
  ${
    isDated
      ? game.noline === true
        ? ''
        : `<div class="day">${game.release
            .slice(8, 10)
            .replace(/^0/, '')}</div>`
      : `<div class="releases">${game.release}</div>`
  }
  ${
    game.developer
      ? `<div class="developer d${game.developer}">${
          toDevIcon[game.developer]
        }</div>`
      : ''
  }
  ${game.multi ? `<div class="multi">${toMultiIcon[game.multi]}</div>` : ''}
</div>`;
    }

    document.querySelector('#grid').insertAdjacentHTML('beforeend', html);
  }

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

  let updateFullscreenSwitch = () => {
    document.querySelector('.switch').checked = Boolean(
      document.fullscreenElement
    );
  };

  document.addEventListener('fullscreenchange', updateFullscreenSwitch);
  window.addEventListener('pageshow', updateFullscreenSwitch);
}
