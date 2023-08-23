namespace NSTemplateMethod {
  abstract class Beverage {
    prepare(): void {
      this.boilWater();
      this.brew();
      this.pourInCup();
      this.addCondiments();
    }

    abstract brew(): void;
    abstract addCondiments(): void;

    boilWater(): void {
      console.log("Boiling water");
    }

    pourInCup(): void {
      console.log("Pouring into cup");
    }
  }

  class Tea extends Beverage {
    brew(): void {
      console.log("Steeping the tea");
    }

    addCondiments(): void {
      console.log("Adding lemon");
    }
  }

  class Coffee extends Beverage {
    brew(): void {
      console.log("Dripping coffee through filter");
    }

    addCondiments(): void {
      console.log("Adding sugar and milk");
    }
  }

  const tea = new Tea();
  tea.prepare();

  const coffee = new Coffee();
  coffee.prepare();
}
