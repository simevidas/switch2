import daysSinceLaunch from './daysSinceLaunch.js';

// category: 1 exclusive, .1 retail, .2 digital-only; 2 “edition”, .1 “plus”, .2 plain
// developer: 1 Nintendo, 2 subsidiary, 3 close partner, 4 other developer
// price: [ game, upgrade pack ] in tens of USD/EUR

// IMPORTANT: sort alphabetically
let games = [
  {
    name: 'Donkey Kong Bananza',
    path: 'donkey-kong-bananza',
    image: '8086f441c9ba6ef349498840c725aa52e1d40f84',
    category: 1.1,
    release: '2025-07-17',
    price: [7],
    developer: 1,
  },
  {
    name: 'Drag x Drive',
    path: 'drag-x-drive',
    image: '06863194d8b6951f8f2c00be75c5960e0fcd8032',
    category: 1.2,
    release: '2025-08-14',
    price: [2],
    developer: 1,
  },
  {
    name: ' Fire Emblem: Fortune’s Weave',
    path: 'fire-emblem-fortunes-weave',
    image: 'd7afc90a912773cc9d7c74dafef6d035f73dc5b2',
    category: 1.1,
    release: '2026',
    developer: 3,
    order: 3,
  },
  {
    name: 'Hyrule Warriors: Age of Imprisonment',
    path: 'hyrule-warriors-age-of-imprisonment',
    image: '0961f8985e8c808e0cb0ae546c6d3fb19c67e99c',
    category: 1.1,
    release: '2025-11-06',
    price: [7],
    developer: 4,
    shift: -12,
  },
  {
    name: 'Kirby Air Riders',
    path: 'kirby-airriders',
    image: 'd82d99905ec24ec1a65462e6e26ee539b7db49af',
    category: 1.1,
    release: '2025-11-20',
    price: [7],
    developer: 3,
    shift: 9,
  },
  {
    name: 'Kirby and the Forgotten Land – Nintendo Switch 2 Edition + Star-Crossed World',
    path: 'kirby-and-the-forgotten-land-switch-2-edition',
    image: 'a9884f5aa1066eacabbd500d52a010b4f87bfb2b',
    category: 2.1,
    release: '2025-08-28',
    price: [8, 2],
    developer: 3,
  },
  {
    name: 'Mario Kart World',
    path: 'mario-kart-world',
    image: '851a15f2fb3402f3e70cee3a52754a47df58e56c',
    category: 1.1,
    release: '2025-06-05',
    price: [8],
    developer: 1,
    noline: true,
  },
  {
    name: 'Mario Tennis Fever',
    path: 'mario-tennis-fever',
    image: '04dc9e7ad39750de2b91515dcb36551ef2235660',
    category: 1.1,
    release: '2026-02-12',
    price: [7],
    developer: 3,
  },
  {
    name: 'Metroid Prime 4: Beyond – Nintendo Switch 2 Edition',
    path: 'metroid-prime-4-beyond-nintendo-switch-2-edition',
    image: '2bde1c4156fde72a7a1ac65f021f86ac239bd686',
    category: 2.2,
    release: '2025-12-04',
    price: [7, 1],
    developer: 2,
  },
  {
    name: 'Nintendo GameCube – Nintendo Classics',
    path: 'nintendo-gamecube-nintendo-classics',
    image: '0f14a40d321dbd13fe80d186f30eaa5c7ec432de',
    category: 1.2,
    release: '2025-06-05',
    price: ['NSO'],
    developer: 1,
    multi: 2,
    noline: true,
  },
  {
    name: 'Nintendo Switch 2 Welcome Tour',
    path: 'nintendo-switch-2-welcome-tour',
    image: '95d2445470a32cc80df722cade547901fb74b7b8',
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
    image: 'b5ab73472383bd16c94cbcaff993591dab5195aa',
    category: 2.2,
    release: '2025-10-16',
    price: [7, 1],
    developer: 3,
  },
  {
    name: ' Pokemon Pokopia',
    path: 'pokemon-pokopia',
    image: '105dbee968248f1e014ceba5da1867d8be656f7e',
    imageType: 'png',
    category: 1.1,
    release: '2026',
    order: 2,
  },
  {
    name: 'Splatoon Raiders',
    path: 'splatoon-raiders',
    image: '9ba330082ff09366452d80dac03235dbc65c379b',
    category: 1.1,
    release: 'TBD',
    developer: 1,
    order: 4,
  },
  {
    name: 'Super Mario Bros. Wonder – Nintendo Switch 2 Edition + Meetup in Bellabel Park',
    path: 'super-mario-wonder-switch-2-edition',
    image: 'e532936b7d3b01847a6d22df8bd42a81c06fdf1e',
    category: 2.1,
    release: 'Spring 2026',
    developer: 1,
    order: 1,
  },
  {
    name: 'Super Mario Party Jamboree – Nintendo Switch 2 Edition + Jamboree TV',
    path: 'super-mario-party-jamboree-nintendo-switch-2-edition',
    image: '0bad92db80f74b517eb0d6597cac2cf2493c820a',
    category: 2.1,
    release: '2025-07-24',
    price: [8, 2],
    developer: 2,
  },
  // {
  //   name: 'The Duskbloods',
  //   path: 'the-duskbloods',
  //   image: '40d840f3dc3f5ee564ba31af78b015c95916d43e',
  //   category: 1.1,
  //   release: '2026',
  //   developer: 4,
  //   order: 2,
  // },
  {
    name: 'The Legend of Zelda: Breath of the Wild – Nintendo Switch 2 Edition',
    path: 'the-legend-of-zelda-breath-of-the-wild-nintendo-switch-2-edition',
    image: 'd601c049e62c067e31f6d7210475f5c115baa94a',
    category: 2.2,
    release: '2025-06-05',
    price: [8, 1],
    developer: 1,
    multi: 2,
  },
  {
    name: 'The Legend of Zelda: Tears of the Kingdom – Nintendo Switch 2 Edition',
    path: 'the-legend-of-zelda-tears-of-the-kingdom-nintendo-switch-2-edition',
    image: '0b23b0a15ae4e662a0f971413e446412eb1558a5',
    category: 2.2,
    release: '2025-06-05',
    price: [8, 1],
    developer: 1,
    multi: 1,
  },
  // {
  //   name: 'Virtual Boy – Nintendo Classics',
  //   path: 'virtual-boy-for-nintendo-switch',
  //   image:
  //     'https://www.nintendo.com/eu/media/images/assets/nintendo_switch_games/virtualboynintendoclassics/1x1_NSwitch2_NCVirtualBoy_image500w.jpg',
  //   category: 1.2,
  //   release: '2026-02-17',
  //   price: ['NSO'],
  //   developer: 1,
  // },
  {
    name: ' Yoshi and the Mysterious Book',
    path: 'yoshi-and-the-mysterious-book',
    image: '21b8e9952e4047b7c9e594abc2afec2bdcd4b9c0',
    outline: '#42b909',
    category: 1.1,
    release: 'Spring 2026',
    developer: 5,
    order: 1,
  },
];

// generate HTML for games

let html = '';
let toStripe = {
  1.1: 1,
  1.2: 2,
  2.1: 3,
  2.2: 4,
};
let toDevIcon = {
  1: 'N',
  2: 'N',
  3: '★',
  4: '',
  5: '❓',
};
let toPriceIcon = {
  1: '①',
  2: '②',
};
let toMultiIcon = {
  1: '●○',
  2: '○●',
};

for (let game of games) {
  let isDated = game.release.match(/^\d{4}-\d{2}-\d{2}$/);
  html += `
<div class="game" style="--stripe: ${toStripe[game.category]}; ${
    isDated
      ? `--days: ${daysSinceLaunch(game.release)};`
      : `--order: ${game.order};`
  } ${game.shift ? `--shift: ${game.shift};` : ''} ${
    game.outline ? `--outline: ${game.outline};` : ''
  }" ${game.multi && game.multi > 1 ? 'hidden' : ''}>
  <a href="https://www.dekudeals.com/items/${game.path}">
    <img src="${
      game.image.startsWith('https')
        ? game.image
        : `https://cdn.dekudeals.com/images/${game.image}/w500.${
            game.imageType || 'jpg'
          }`
    }" alt="${game.name}">
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

export default function gamesHTML() {
  return html;
}
