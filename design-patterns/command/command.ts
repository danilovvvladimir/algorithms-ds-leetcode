namespace NSCommand {
  interface Command {
    execute(): void;
  }

  class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
      this.light = light;
    }

    execute(): void {
      this.light.turnOn();
    }
  }

  class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
      this.light = light;
    }

    execute(): void {
      this.light.turnOff();
    }
  }

  class Light {
    private isOn: boolean = false;

    turnOn(): void {
      this.isOn = true;
      console.log("Light is on");
    }

    turnOff(): void {
      this.isOn = false;
      console.log("Light is off");
    }
  }

  class NoCommand implements Command {
    execute(): void {}
  }

  class RemoteControl {
    private command: Command;

    constructor() {
      this.command = new NoCommand();
    }

    setCommand(command: Command): void {
      this.command = command;
    }

    pressButton(): void {
      this.command.execute();
    }
  }

  const light = new Light();
  const lightOnCommand = new LightOnCommand(light);
  const lightOffCommand = new LightOffCommand(light);

  const remote = new RemoteControl();

  remote.setCommand(lightOnCommand);
  remote.pressButton(); // Output: Light is on

  remote.setCommand(lightOffCommand);
  remote.pressButton(); // Output: Light is off
}
