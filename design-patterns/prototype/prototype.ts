namespace NSPrototype {
  class PrototypeClass {
    public property1: string;
    public property2: number;

    constructor(property1: string, property2: number) {
      this.property1 = property1;
      this.property2 = property2;
    }

    public clone(): PrototypeClass {
      return new PrototypeClass(this.property1, this.property2);
    }
  }

  const originalObject = new PrototypeClass("Hello", 42);
  const clonedObject1 = originalObject.clone();
  clonedObject1.property1 = "Bye";
  const clonedObject2 = originalObject.clone();

  console.log(originalObject);
  console.log(clonedObject1);
  console.log(clonedObject2);
}
