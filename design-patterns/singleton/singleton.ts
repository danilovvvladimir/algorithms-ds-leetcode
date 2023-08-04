namespace DPSingleton {
  class MyMap {
    private static instance: MyMap | null = null;
    map: Map<string, string> = new Map();

    private constructor() {}

    public static getInstance(): MyMap {
      if (!MyMap.instance) {
        MyMap.instance = new MyMap();
      }
      return MyMap.instance;
    }

    clean() {
      this.map = new Map();
    }
  }

  class MapWriter {
    addValueToMap(key: any, value: any) {
      const myMap = MyMap.getInstance();
      myMap.map.set(key, value);
    }
    cleanMap() {
      const myMap = MyMap.getInstance();
      myMap.clean();
    }
  }

  class MapReader {
    readFromMapByKey(key: any) {
      const myMap = MyMap.getInstance();
      return myMap.map.get(key);
    }
    readAllMap() {
      const myMap = MyMap.getInstance();
      return myMap.map;
    }
  }

  const mpReader1 = new MapReader();
  const mpWrtiter1 = new MapWriter();

  mpWrtiter1.addValueToMap("hello", "world");
  console.log(mpReader1.readAllMap());
  console.log(mpReader1.readFromMapByKey("hello"));
  mpWrtiter1.cleanMap();
  console.log(mpReader1.readAllMap());
}
