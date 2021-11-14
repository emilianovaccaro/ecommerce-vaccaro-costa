const items = [
  {
    id: 30,
    name: 'Aguita',
    stock: 8,
    price: 45,
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
  },
  {
    id: 29,
    name: 'Gaseosa 1,5 lts',
    stock: 3,
    price: 140,
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
  },
  {
    id: 76,
    name: 'Alambrado Chardonnay 750 ml',
    stock: 9,
    price: 575,
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
  },
  {
    id: 78,
    name: 'Un Vinito',
    stock: 25,
    price: 575,
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
  },
  {
    id: 79,
    name: 'Otro Vinito',
    stock: 10,
    price: 575,
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
  },
  {
    id: 80,
    name: 'Otro vino mas!',
    stock: 0,
    price: 575,
    img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
  }
];

export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(items)
  }, 2000)
});

