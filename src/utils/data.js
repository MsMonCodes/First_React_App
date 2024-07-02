const tea = {
    id: self.crypto.randomUUID(),
    name: 'Herb water',
    imgUrl: 'https://media.wincacademy.nl/tea.jpeg',
    alt: `Picture of a cup of tea`,
};

const coffee = {
    id: self.crypto.randomUUID(),
    name: 'Bean water',
    imgUrl: 'https://media.wincacademy.nl/coffee.jpeg',
    alt: `Picture of a cup coffee`,
};

const kombucha = {
    id: self.crypto.randomUUID(),
    name: 'Fermented tea',
    imgUrl: 'https://media.wincacademy.nl/kombucha.jpg',
    alt: `Picture of a kombucha drink`,
};

const orangeJuice = {
    id: self.crypto.randomUUID(),
    name: 'Fruit squeeze',
    imgUrl: 'https://media.wincacademy.nl/orange.png',
    alt: `Picture of a glass of orange juice`,
};

const water = {
    id: self.crypto.randomUUID(),
    name: 'H2O',
    imgUrl: 'https://media.wincacademy.nl/water.png',
    alt: `Picture of a glass of water`,
};

const cola = {
    id: self.crypto.randomUUID(),
    name: 'Common pop',
    imgUrl: 'https://media.wincacademy.nl/cola.png',
    alt: `Picture of a glass of cola`,
};

export const availableDrinks = [
    tea,
    coffee,
    kombucha,
    orangeJuice,
    water,
    cola,
];