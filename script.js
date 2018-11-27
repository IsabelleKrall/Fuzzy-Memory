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
    .sort(() => 0.5 - Math.random());

  let firstGuess = '';
  let secondGuess = '';
  let count = 0;
  let previousTarget = null;
  let delay = 1200;


const game = document.querySelector('.game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

//Adding the grid-section to the game-div:
game.appendChild(grid);


//Adding card, front, back to the game-div:
gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});


//Function for matching the cards:
const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};
