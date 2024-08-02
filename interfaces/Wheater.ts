interface Wheater {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wheater: [{ main: string; description: string }];
}
