// New features in ES6

// 1. The let keyword

// 2. The const keyword

// 3. Arrow Functions
const sum = (x, y) => x + y;
console.log(sum(3, 5));

//  4. Object Destructuring
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
let { firstName, age } = person;
console.log(firstName, age);

// 5. Array Destructuring
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);

// 6. The Spread ... Operator
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

// 7. The For/Of Loop
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
    text += x + " ";
}
console.log(text);

// 8. Javascript Map
const fruits2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
let numb = fruits2.get("apples");
console.log(numb);

// 9. JavaScript Sets
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
// is HashSet

// 10. JavaScript Classes
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
console.log(myCar1);
console.log(myCar2);

// 11. JavaScript Promises
