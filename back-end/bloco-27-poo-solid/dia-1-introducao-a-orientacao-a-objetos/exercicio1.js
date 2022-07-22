class Tv {
    constructor(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    turnOn() {
        console.log(`This TV's brand is ${this._brand} and it's a ${this._size} inches ${this._resolution} with ${this._connections} connections available`);
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(value) {
        if (this._connections.includes(value)) {
            this._connectedTo = value;
            console.log(this._connectedTo);
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
    }
}
const sampTv = new Tv('samp', 24, 'fullHd', ['hdmi', 'vca', 'rca']);
sampTv.turnOn();
sampTv.connectedTo = 'ethernet';
sampTv.connectedTo = 'rca';
