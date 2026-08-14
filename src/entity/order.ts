import OrderItem from "./order_item";

export default class Order {

    private _orderId: string;
    private _customerId: string;
    private _items: OrderItem[] = [];

    constructor(orderId: string, customerId: string, items: OrderItem[]) {
        this._orderId = orderId;
        this._customerId = customerId;
        this._items = items;
    }

    get orderId(): string { return this._orderId; }
    get customerId(): string { return this._customerId; }
    get items(): OrderItem[] { return this._items; }

    total(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

}