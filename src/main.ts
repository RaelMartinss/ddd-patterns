import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";
import Address from "./domain/entity/address";


let address = new Address(
  "123 Main St",
  "100",
  "New York",
  "NY",
  "10001"
);

let customer = new Customer("12", "John Doe");

let customer2 = new Customer("13", "Jane Doe");
console.log(`Customer2 ID: ${customer2.id}`); // Output: 13

let orderItem = new OrderItem("1", "Laptop", 1000, "p1", 1);
let orderItem2 = new OrderItem("2", "Mouse", 50, "p2", 2);
let order = new Order("1", customer.id, [orderItem, orderItem2]);

console.log(`Customer ID: ${customer.id}`); // Output: 12
console.log(`Customer Name: ${customer.name}`); // Output: John Doe

customer.changeName("Jane Doe");
console.log(`Customer New Name: ${customer.name}`); // Output: Jane Doe

// customer.changeAddress(new Address(
//   "456 Elm St", 
//   "200", 
//   "New York", 
//   "NY", 
//   "10002"
// ));
// console.log(customer.address.toString()); // Output: 456 Elm St

// customer.activate();
// console.log(customer.active); // Output: false
