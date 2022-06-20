class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn():void {
    console.log(`${this.brand} ${this.size} ${this.brand} ${this.resolution} ${this.connections}`);
  }
}

const tV1 = new Tv('lg', 42, 'full hd', ['hdmi', 'wifi'])

tV1.turnOn();