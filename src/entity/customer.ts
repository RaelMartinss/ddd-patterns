import Address from "./address";

export default class Customer {
  private readonly _id: string;
  private _name: string;
  private _address: Address;
  private _active: boolean = false;

  constructor(id: string, name: string, address: Address) {
    this._id = id;
    this._name = Customer.validateName(name);
    this._address = address;
  }

  get id(): string { return this._id; }
  get name(): string { return this._name; }
  get address(): Address { return this._address; }
  get active(): boolean { return this._active; }

  private static validateName(name: string): string {
    const value = name.trim();

    if (!value) {
      throw new Error("The name cannot be empty.");
    }
    
    return value;
  }

  changeName(newName: string): void {
    this._name = Customer.validateName(newName);
  }

  changeAddress(newAddress: Address): void {
    this._address = newAddress;
  }

  activate(): void {
    if (this._active) {
      throw new Error("The customer is already activated.");
    }
    this._active = true;
  }

  deactivate(): void {
    if (!this._active) {
      throw new Error("The customer is already deactivated.");
    }

    this._active = false;
  }
}

const b = (a: number, b: number) => {
  return a + b;
}

console.log(b(2, 2));