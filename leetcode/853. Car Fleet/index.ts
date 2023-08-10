namespace NS853 {
  function carFleet(
    target: number,
    position: number[],
    speed: number[]
  ): number {
    const cars: Array<[number, number]> = [];

    for (let i = 0; i < position.length; i++) {
      const timeToReach = (target - position[i]) / speed[i];

      cars.push([position[i], timeToReach]);
    }

    cars.sort((a, b) => b[0] - a[0]);

    let fleets = 0;
    let currentTime = 0;

    for (const [_, timeToReach] of cars) {
      if (timeToReach > currentTime) {
        fleets++;
        currentTime = timeToReach;
      }
    }

    return fleets;
  }

  const result = carFleet(10, [3, 5, 7], [3, 2, 1]);
  console.log(result);
}
