namespace NSObserver {
  interface Observer {
    update(temperature: number, humidity: number, pressure: number): void;
  }

  interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
  }

  class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    registerObserver(observer: Observer): void {
      this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }

    notifyObservers(): void {
      for (const observer of this.observers) {
        observer.update(this.temperature, this.humidity, this.pressure);
      }
    }

    setMeasurements(
      temperature: number,
      humidity: number,
      pressure: number
    ): void {
      this.temperature = temperature;
      this.humidity = humidity;
      this.pressure = pressure;
      this.notifyObservers();
    }
  }

  // Конкретные наблюдатели (приложения, устройства и т. д.)
  class PhoneDisplay implements Observer {
    update(temperature: number, humidity: number, pressure: number): void {
      console.log(
        `Phone Display: Temperature ${temperature}°C, Humidity ${humidity}%, Pressure ${pressure} hPa`
      );
    }
  }

  class TVDisplay implements Observer {
    update(temperature: number, humidity: number, pressure: number): void {
      console.log(
        `TV Display: The weather conditions are - Temperature ${temperature}°C, Humidity ${humidity}%, Pressure ${pressure} hPa`
      );
    }
  }

  const weatherStation = new WeatherStation();

  const phoneDisplay = new PhoneDisplay();
  const tvDisplay = new TVDisplay();

  weatherStation.registerObserver(phoneDisplay);
  weatherStation.registerObserver(tvDisplay);

  weatherStation.setMeasurements(25, 60, 1010);
  weatherStation.setMeasurements(25, 60, 1015);
}
