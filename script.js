//Array of cards

const cardsArray = [{
    'name': 'anka',
    'img': 'images/anka.svg',
  },
  {
    'name': 'far',
    'img': 'images/far.svg',
  },
  {
    'name': 'get',
    'img': 'images/get.svg',
  },
  {
    'name': 'gris',
    'img': 'images/gris.svg',
  },
  {
    'name': 'hast',
    'img': 'images/hast.svg',
  },
  {
    'name': 'hund',
    'img': 'images/hund.svg',
  },
  {
    'name': 'kanin',
    'img': 'images/kanin.svg',
  },
  {
    'name': 'ko',
    'img': 'images/ko.svg',
  },
  {
    'name': 'skottkarra',
    'img': 'images/skottkarra.svg',
  },
  {
    'name': 'traktor',
    'img': 'images/traktor.svg',
  },

];

const gameGrid = cardsArray
  .concat(cardsArray)

const game = document.querySelector('.game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

//Adding the grid-section to the game-div:
game.appendChild(grid);
