class Client {
    constructor(name) {
        this._name = String();
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
class OrderItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value < 0) {
            throw new Error('O preço deve ser positivo.');
        }
        this._price = value;
    }
}
class Order {
    constructor(client, items, paymentMethod, discount) {
        this._items = [];
        this._discount = 0;
        this._client = client;
        this._items = items;
        this._paymentMethod = paymentMethod;
        this._discount = discount;
    }
    get client() {
        return this._client;
    }
    set client(value) {
        this._client = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        if (value.length === 0) {
            throw new Error('O pedido deve ter pelo menos um item!');
        }
        this._items = value;
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
    set paymentMethod(value) {
        this._paymentMethod = value;
    }
    get discount() {
        return this._discount;
    }
    set discount(value) {
        if (value < 0) {
            throw new Error('O desconto não pode ser negativo');
        }
        this._discount = value;
    }
}
const client = new Client('João');
const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);
const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);
console.log(order);
