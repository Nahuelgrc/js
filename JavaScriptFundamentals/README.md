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
