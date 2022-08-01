let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Arrays
let colors: string[] = ['red', 'green', 'blue', 'yellow'];
let myNumbres: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let truths: boolean[] = [true, false, true, false, false, false];

//classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const longNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
//1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x:10 , y:20}
