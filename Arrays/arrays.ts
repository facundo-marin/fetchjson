const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const data = [new Date(), new Date()];

const carsByMake: string[][] = [];
const carbyMake = [['ford'], ['chevy'], ['toyota']];

//Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car;
});

//Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100);
