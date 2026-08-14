export default class Address {

    private _street: string;
    private _number: string;
    private _city: string;
    private _state: string;
    private _zipCode: string;

    constructor(street: string, number: string, city: string, state: string, zipCode: string) {
        this._street = Address.validateStreet(street);
        this._number = Address.validateNumber(number);
        this._city = Address.validateCity(city);
        this._state = Address.validateState(state);
        this._zipCode = Address.validateZipCode(zipCode);
    }

    get street(): string { return this._street; }
    get number(): string { return this._number; }
    get city(): string { return this._city; }
    get state(): string { return this._state; }
    get zipCode(): string { return this._zipCode; }

    private static validateStreet(street: string): string {
        const value = street.trim();
        if (!value) {
            throw new Error("The street cannot be empty.");
        }
        return value;
    }

    private static validateNumber(number: string): string {
        const value = number.trim();

        if (!value) {
            throw new Error("The number cannot be empty.");
        }

        return value;
    }

    private static validateCity(city: string): string {
        const value = city.trim();
        if (!value) {
            throw new Error("The city cannot be empty.");
        }
        return value;
    }

    private static validateState(state: string): string {
        const value = state.trim();
        if (!value) {
            throw new Error("The state cannot be empty.");
        }
        return value;
    }

    private static validateZipCode(zipCode: string): string {
        const value = zipCode.trim();
        if (!value) {
            throw new Error("The zip code cannot be empty.");
        }
        return value;
    }

    toString(): string {
        return `${this._street}, ${this._number}, ${this._city}, ${this._state} ${this._zipCode}`;
    }

}