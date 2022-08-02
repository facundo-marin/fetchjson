class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('black');
car.startDrivingProcess();
console.log(car.color);

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
