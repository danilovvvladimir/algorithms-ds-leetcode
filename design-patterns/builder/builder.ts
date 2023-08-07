namespace NSBuilder {
  class Product {
    private name: string;
    private price: number;
    private weight: number;
    private color: string;

    constructor(name: string, price: number, weight: number, color: string) {
      this.name = name;
      this.price = price;
      this.weight = weight;
      this.color = color;
    }

    public getInfo(): string {
      return `Product: ${this.name}, Price: ${this.price}, Weight: ${this.weight}, Color: ${this.color}`;
    }
  }

  class ConcreteProductBuilder {
    private name!: string;
    private price!: number;
    private weight!: number;
    private color!: string;

    setName(name: string) {
      this.name = name;
      return this;
    }

    setPrice(price: number) {
      this.price = price;
      return this;
    }

    setWeight(weight: number) {
      this.weight = weight;
      return this;
    }

    setColor(color: string) {
      this.color = color;
      return this;
    }

    getResult(): Product {
      return new Product(this.name, this.price, this.weight, this.color);
    }
  }

  const builder = new ConcreteProductBuilder();

  const product = builder
    .setName("Smartphone")
    .setColor("Black")
    .setPrice(5000)
    .setWeight(0.2)
    .getResult();

  console.log(product.getInfo());
}
