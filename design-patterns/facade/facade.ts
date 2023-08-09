namespace NSFacade {
  // Классы, представляющие части системы
  class CPU {
    freeze() {
      console.log("CPU: Заморозка");
    }
    jump(position: number) {
      console.log("CPU: Переход на позицию", position);
    }
    execute() {
      console.log("CPU: Выполнение команды");
    }
  }

  class Memory {
    load(position: number, data: string) {
      console.log(`Memory: Загрузка данных '${data}' по позиции ${position}`);
    }
  }

  class HardDrive {
    read(position: number, size: number): string {
      const data = `Данные, считанные с жесткого диска`;
      console.log(`HardDrive: Чтение ${size} байтов с позиции ${position}`);
      return data;
    }
  }

  class ComputerFacade {
    private cpu: CPU;
    private memory: Memory;
    private hardDrive: HardDrive;

    constructor() {
      this.cpu = new CPU();
      this.memory = new Memory();
      this.hardDrive = new HardDrive();
    }

    start() {
      this.cpu.freeze();
      this.memory.load(0, "Bootstrap data");
      this.cpu.jump(0);
      this.cpu.execute();
    }

    fetchData(position: number, size: number): string {
      return this.hardDrive.read(position, size);
    }
  }
}
