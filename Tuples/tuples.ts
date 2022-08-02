const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//Type alias
type Drink = [string, boolean, number];

//Sin usar Type alias
// const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//Normalmente no se usa porque no se sabe que representan dichos valores.
//Se usan objetos para saber a que propiedades se hace referencia
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
