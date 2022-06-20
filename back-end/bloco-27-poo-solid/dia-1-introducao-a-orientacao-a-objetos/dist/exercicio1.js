"use strict";
class Tv {
    constructor(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    turnOn() {
        console.log(`${this._brand} ${this._size} ${this._brand} ${this._resolution} ${this._connections}`);
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
const tV1 = new Tv('lg', 42, 'full hd', ['hdmi', 'wifi']);
tV1.turnOn();
tV1.connectedTo = 'hdmi';
console.log(`this tv is connected to: ${tV1.connectedTo}`);
