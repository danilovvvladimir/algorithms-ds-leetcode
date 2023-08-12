namespace NSComposite {
  abstract class Graphic {
    abstract draw(): void;
  }

  class Circle extends Graphic {
    draw(): void {
      console.log("Drawing a circle");
    }
  }

  class Square extends Graphic {
    draw(): void {
      console.log("Drawing a square");
    }
  }

  class Group extends Graphic {
    private children: Graphic[] = [];

    add(graphic: Graphic) {
      this.children.push(graphic);
    }

    draw(): void {
      console.log("Drawing a group:");
      for (const graphic of this.children) {
        graphic.draw();
      }
    }
  }

  const circle = new Circle();
  const square = new Square();

  const group = new Group();
  group.add(circle);
  group.add(square);

  group.draw();
}
