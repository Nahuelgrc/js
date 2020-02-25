# Project purpose

### Doing `JavaScript Fundamentals` course by _Mark Zamoyta_ on Pluralsight

### Declaring variables

**let** and **var** keyword

1 - 
```javascript
console.log(car); // error
let carId = 42;
```

```javascript
console.log(car); // undefined (not an error)
var carId = 42;
```

2 - 

```javascript
if (true) {
    var foo = 9;
}
console.log(foo); // error
```

```javascript
if (true) {
    var foo = 9;
}
console.log(foo); // 9
```

### Rest parameters 

This is to pass several parameters

```javascript
function send(...items) {
    items.forEach(item => console.log(item));
}

send('day', 1, 2, 3)
```

### Array destructuring

```javascript
let numbers = [1, 2, 3];
let [number1, number2, number3] = numbers;

console.log(number1, number2, number3); // 1 2 3
```

### Object destructuring

```javascript
function startNumbers(number1, number2, number3, ...rest) {
    console.log(rest);
}

let numbers = [1,2,3,4,5,6];
startNumbers(...numbers);
```

### IIFE (Immediately Invoked Function Expression)

By doing this we are executing the function immediately when is declared

```javascript
const app = (function() {
    const myVar = 123;
    console.log('in function ==>'. myVar);
    return { myVar }
})();

console.log(app);
```

### Closures

```javascript
const app = (function() {
    const getId = () => {
        return 25;
    };
    return { getId }
})();

console.log(app.getId());
```

### Bind

```javascript
let i = {
    number: 123,
    getNumber: function() {
        return this.number;
    }
};
let newNumber = { number: 456 };
let newFunction = i.getNumber.bind(newNumber);

console.log(newFunction());
```

### Arrow Functions

```javascript
const getId = (prefix, sufix) => {
    return  prefix + 1 + sufix;
};

console.log( getId("The ID is: ", "!"));
```