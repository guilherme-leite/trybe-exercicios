class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn():void {
    console.log(`${this._brand} ${this._size} ${this._brand} ${this._resolution} ${this._connections}`);
  }

  get connectedTo(): string {
    return this._connectedTo as string;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
      
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tV1 = new Tv('lg', 42, 'full hd', ['hdmi', 'wifi'])

tV1.turnOn();

tV1.connectedTo = 'hdmi';

console.log(`this tv is connected to: ${tV1.connectedTo}`);

