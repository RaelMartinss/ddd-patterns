import Order from "./order";
import OrderItem from "./order_item";


describe('Order unit tests', () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            new Order("", "123", []);
        }).toThrow("Id is required");
    });

    it('should throw error when customerId is empty', () => {
        expect(() => {
            new Order("1", "", []);
        }).toThrow("CustomerId is required");
    });

    it('should throw error when items is empty', () => {
        expect(() => {
            new Order("1", "123", []);
        }).toThrow("Items are required");
    });

    it("should calculate total", () => {
        const item = new OrderItem("i1", "Item 1", 100);
        const item2 = new OrderItem("i2", "Item 2", 200);
        const order = new Order("o1", "c1", [item]);

        let total = order.total();

        expect(order.total()).toBe(100);

        const order2 = new Order("o1", "c1", [item, item2]);
        total = order2.total();
        expect(total).toBe(300);
    });

    it('should calculate total correctly', () => {
        const orderItem1 = { price: 10 } as any;
        const orderItem2 = { price: 20 } as any;
        const order = new Order("1", "123", [orderItem1, orderItem2]);
        expect(order.total()).toBe(30);
    });
});