
// console.log(car); // undefined (not an error)
// var carId = 42;

// if (true) {
//     var foo = 9;
// }
// console.log(foo); // error

// if (true) {
//     var foo = 9;
// }
// console.log(foo); // 9

// -------

// function send(...items) {
//     items.forEach(item => console.log(item));
// }

// send('day', 1, 2, 3);

// -------

// let numbers = [1, 2, 3];
// let [number1, number2, number3] = numbers;

// console.log("Destructuring array", number1, number2, number3); // 1 2 3

// -------

// function startNumbers(number1, number2, number3, ...rest) {
//     console.log(rest);
// }

// let numbers = [1,2,3,4,5,6];
// startNumbers(...numbers);

// -------

// const app = (function() {
//     const myVar = 123;
//     console.log('in function ==>'. myVar);
//     return { myVar };
// })();

// console.log(app);

// -------

// const app = (function() {
//     const getId = () => {
//         return 25;
//     };
//     return { getId }
// })();

// console.log(app.getId());

// -------

// let i = {
//     number: 123,
//     getNumber: function() {
//         return this.number;
//     }
// };
// let newNumber = { number: 456 };
// let newFunction = i.getNumber.bind(newNumber);

// console.log(newFunction());

// -------

const getId = (prefix, sufix) => {
    return  prefix + 1 + sufix;
};

console.log( getId("The ID is: ", "!"));