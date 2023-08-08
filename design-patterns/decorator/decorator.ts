namespace NSDecorator {
  interface Coffee {
    cost(): number;
    description(): string;
  }

  class Cappuccino implements Coffee {
    cost(): number {
      return 15;
    }

    description(): string {
      return "Cappuccino";
    }
  }

  class Latte implements Coffee {
    cost(): number {
      return 10;
    }

    description(): string {
      return "Latte";
    }
  }

  // Базовый класс для декораторов
  abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
      this.coffee = coffee;
    }

    abstract cost(): number;
    abstract description(): string;
  }

  class MilkDecorator extends CoffeeDecorator {
    cost(): number {
      return this.coffee.cost() + 2;
    }

    description(): string {
      return this.coffee.description() + ", Milk";
    }
  }

  class SugarDecorator extends CoffeeDecorator {
    cost(): number {
      return this.coffee.cost() + 1;
    }

    description(): string {
      return this.coffee.description() + ", Sugar";
    }
  }

  let newCoffee = new Cappuccino();
  console.log(newCoffee.description(), newCoffee.cost());

  newCoffee = new MilkDecorator(newCoffee);
  console.log(newCoffee.description(), newCoffee.cost());

  newCoffee = new SugarDecorator(newCoffee);
  console.log(newCoffee.description(), newCoffee.cost());
}
