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





//Function for randomize the cards in card-box:
var container = document.querySelector('.grid-container')

for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
}

//Make selected cards visable:
const visable = document.querySelectorAll('.card-box');

const visableArray = Array.from(visable);

emptyarray = [];
complete = [];
counter = 0;

//Show the selected cards when clicking:
visableArray.forEach( (picture)=> {
  picture.addEventListener('click', ()=>{
    picture.classList.add('view-picture')
  });
});
