
//card data:

const cardsArray = [{
    'name': 'korv',
    'img': 'pictures/korv.svg',
  },
  {
    'name': 'kringla',
    'img': 'pictures/kringla.svg',
  },

  {
    'name': 'kringla',
    'img': 'pictures/kringla.svg',
  },
  {
    'name': 'kringla',
    'img': 'pictures/kringla.svg',
  },
  {
    'name': 'kringla',
    'img': 'pictures/kringla.svg',
  },
  {
    'name': 'kringla',
    'img': 'pictures/kringla.svg',
  },
  {
    'name': 'kringla',
    'img': 'pictures/kringla.svg',
  },
  {
    'name': 'kringla',
    'img': 'pictures/kringla.svg',
  },
  {
    'name': 'kringla',
    'img': 'pictures/kringla.svg',
  },
];


const game = document.getElementById('game');

const grid= document.createElement('section');
grid.setAttribute('class', 'grid');

game.appendChild(grid);

//get images to display with a forEach loop:

cardsArray.forEach(item => {
  const card = document.createElement('div');

  card.classList.add('card');

  card.dataset.name = item.name;

  card.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card); 
})
