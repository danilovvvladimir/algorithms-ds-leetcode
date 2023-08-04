namespace NSFactoryMethod {
  interface ICar {
    id: number;
    model: string;
    price: number;
    maxSpeed: number;
  }

  class BMW implements ICar {
    private static latestID: number = 1;

    id: number;
    model: string;
    price: number;
    maxSpeed: number;

    constructor(model: string, price: number, maxSpeed: number) {
      this.id = BMW.latestID++;
      this.model = model;
      this.price = price;
      this.maxSpeed = maxSpeed;
    }
  }

  class Mercedes implements ICar {
    private static latestID: number = 1;

    id: number;
    model: string;
    price: number;
    maxSpeed: number;
    isAMG: boolean;

    constructor(
      model: string,
      price: number,
      maxSpeed: number,
      isAMG: boolean
    ) {
      this.id = Mercedes.latestID++;
      this.model = model;
      this.price = price;
      this.maxSpeed = maxSpeed;
      this.isAMG = isAMG;
    }
  }

  interface ICarFactory {
    create(type: string): BMW | Mercedes;
  }

  class CarFactory implements ICarFactory {
    create(type: string) {
      if (type === "X5") {
        return new BMW(type, 108000, 300);
      } else if (type === "X6") {
        return new BMW(type, 108000, 300);
      } else {
        return new Mercedes("AMG G63", 63000, 200, true);
      }
    }
  }

  const carFactory = new CarFactory();
  console.log(carFactory.create(""));
  console.log(carFactory.create("X5"));
}
