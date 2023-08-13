namespace NSBridge {
  // Абстракция
  interface Remote {
    powerOn(): void;
    powerOff(): void;
    volumeUp(): void;
    volumeDown(): void;
  }

  // Конкретная реализация абстракции
  class BasicRemote implements Remote {
    powerOn(): void {
      console.log("BasicRemote: Power On");
    }

    powerOff(): void {
      console.log("BasicRemote: Power Off");
    }

    volumeUp(): void {
      console.log("BasicRemote: Volume Up");
    }

    volumeDown(): void {
      console.log("BasicRemote: Volume Down");
    }
  }

  class AdvancedRemote implements Remote {
    powerOn(): void {
      console.log("AdvancedRemote: Power On");
    }

    powerOff(): void {
      console.log("AdvancedRemote: Power Off");
    }

    volumeUp(): void {
      console.log("AdvancedRemote: Volume Up");
    }

    volumeDown(): void {
      console.log("AdvancedRemote: Volume Down");
    }

    // Дополнительный функционал для продвинутого пульта
    mute(): void {
      console.log("AdvancedRemote: Mute");
    }
  }

  // Абстракция для устройства (реализации)
  interface Device {
    power(): void;
    setVolume(volume: number): void;
  }

  // Конкретная реализация устройства
  class TV implements Device {
    power(): void {
      console.log("TV: Power");
    }

    setVolume(volume: number): void {
      console.log(`TV: Set Volume to ${volume}`);
    }
  }

  class Radio implements Device {
    power(): void {
      console.log("Radio: Power");
    }

    setVolume(volume: number): void {
      console.log(`Radio: Set Volume to ${volume}`);
    }
  }

  // Абстракция с использованием устройства
  class RemoteControl {
    constructor(protected device: Device) {}

    powerOn(): void {
      this.device.power();
    }

    powerOff(): void {
      this.device.power();
    }

    volumeUp(): void {
      this.device.setVolume(1);
    }

    volumeDown(): void {
      this.device.setVolume(-1);
    }
  }

  const tvRemote = new RemoteControl(new TV());
  const radioRemote = new RemoteControl(new Radio());
}
