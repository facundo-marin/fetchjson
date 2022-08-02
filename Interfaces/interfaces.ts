const oldCivic = {
  name: 'civic',
  year: 2000,
  broke: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broke: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broke}`);
};

printVehicle(oldCivic);
