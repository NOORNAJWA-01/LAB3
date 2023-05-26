// task 1
let product = {
  productName: "Phone",
  quantity: 10,
  price: 5.99
};

console.log("Product Name: " + product.productName);
console.log("Quantity: " + product.quantity);
console.log("Price: " + product.price);

// task 2
function Book(bookName, authorName) {
  this.bookName = bookName;
  this.authorName = authorName;
}

Book.prototype.price = 10.99;

let myBook = new Book("To The LightHouse", "Stefany John");

console.log("Book Name: " + myBook.bookName);
console.log("Author Name: " + myBook.authorName);
console.log("Price: " + myBook.price);


//task 3
let employee = {
  employeeName: "Selena Gomez",
  employeeId: 10752,
  salary: 40000
};

let manager = Object.create(employee);
manager.managerName = "Sofea Jane";
manager.branch = "American";

console.log("Employee Name: " + manager.employeeName);
console.log("Employee ID: " + manager.employeeId);
console.log("Salary: " + manager.salary);
console.log("Manager Name: " + manager.managerName);
console.log("Branch: " + manager.branch);
