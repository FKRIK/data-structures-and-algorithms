## Arrays

Arrays enable storing a collection of multiple items under a single variable name. Items needs to be the same data type.

> To check if something is an array, use `Array.isArray()`.

| Method    | Description                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| push()    | **Adds** one or more elements to the **END** of an array and returns the new length of it;                                                      |
| pop()     | **Removes** the **LAST** element from an array and returns it [the deleted element];                                                            |
| shift()   | **Removes** the **FIRST** element from an array and returns it [the deleted element];                                                           |
| unshift() | **Adds** one or more elements to the **BEGINNING** of an array and returns the new length of it                                                 |
| splice()  | **Removes** or **replace** existing elements and/or adding new elements in place of an array. Returns an array containing the deleted elements. |

### push()

```js
const names = ["Jack", "Laura", "Paul", "Megan"];
names.push("Jill"); // => 5
names;
// => ['Jack', 'Laura', 'Paul', 'Megan', 'Jill']
```

### pop()

```js
const names = ["Jack", "Laura", "Paul", "Megan"];
names.pop(); // => 'Megan'
names;
// => ['Jack', 'Laura', 'Paul']
```

### shift()

```js
const names = ["Jack", "Laura", "Paul", "Megan"];
names.shift(); // => 'Jack'
names;
// => ['Laura', 'Paul', 'Megan']
```

### unshift()

```js
const names = ["Jack", "Laura", "Paul", "Megan"];
names.unshift("Jill"); // => 5
names;
// => ['Jill', 'Jack', 'Laura', 'Paul', 'Megan']
```

### splice()

```js
const names = ["Jack", "Laura", "Paul", "Megan"];
names.splice(2, 1, "Jill"); // => ['Paul']
names;
// => ['Jack', 'Laura', 'Jill', 'Megan']
```

> From index 2, remove 1 element, add "Jill".

## Objects

Objects are collections of key-value pairs. The values inside one object can have different types, but the type of the key: it has to be a string.

> The `key` doesn't need to be wrapped in quotation marks although it is supposed to be a string. But if it have special characters, then a quotation mark is a must.

### Create an object

```js
const emptyObject = {};

const obj = {
  favoriteNumber: 42,
  greeting: "Hello World",
  useGreeting: true,
  address: {
    street: "Trincomalee Highway",
    city: "Batticaloa",
  },
  fruits: ["melon", "papaya"],
  addNumbers: function (a, b) {
    return a + b;
  },
};
```

```javascript
const x = 1;
const y = 2;

const obj = {
  x: x,
  y: y,
  calcSum: function (a, b) {
    return a + b;
  },
};

// Can be shortened to ...
const obj = {
  x,
  y,
  calcSum(a, b) {
    return a + b;
  },
};
```

### Retrieving a value

```javascript
const obj = { greeting: "hello world" };

obj.greeting;
// => hello world

obj["greeting"];
// => hello world

// Bracket notation also works with variables.
const key = "greeting";
obj[key];
// => hello world
```

```javascript
const obj = {
  address: {
    street: "Trincomalee Highway",
    city: "Batticaloa",
  },
};

obj.address.city;
// => 'Batticaloa'

obj["address"]["city"];
// => 'Batticaloa'

// Notations can also be mixed.
obj.address["city"];
// => 'Batticaloa'
```

### Adding or Changing a Value

```javascript
const obj = { greeting: "hello world" };

obj.greeting = "Hi there!";
obj["greeting"] = "Welcome.";

obj.newKey1 = "new value 1";
obj["new key 2"] = "new value 2";

const key = "new key 3";
obj[key] = "new value 3";
```

### Deleting an Entry

```javascript
const obj = {
  key1: "value1",
  key2: "value2",
};

delete obj.key1;
delete obj["key2"];
```

### Checking Whether a Key Exists

```javascript
const obj = { greeting: "hello world" };

obj.hasOwnProperty("greeting");
// => true

obj.hasOwnProperty("age");
// => false
```

### Looping Through an Object

```javascript
const obj = {
  name: "Ali",
  age: 65,
};

for (let key in obj) {
  console.log(key, obj[key]);
}
// name Ali
// age 65
```

### Keys, Values and Entries

```javascript
const obj = {
  name: "Ali",
  age: 65,
};

Object.keys(obj);
// => [ 'name', 'age' ]

Object.values(obj);
// => [ 'Ali', 65 ]

Object.entries(obj);
// => [ [ 'name', 'Ali' ], [ 'age', 65 ] ]
```

## Functions

### 'Commom' function declaration
```javascript
function addTwoNumbers(number1, number2){
  return number1 + number2
}
```
### Arrow Function
```javascript
// function keyword removed and => added
const addTwoNumbers = (number1, number2) => {
  return number1 + number2
};
```
If the function body contains only a return statement, the `{}` and `return` can be omitted.
```javascript
const addUpTwoNumbers = (num1, num2) => { return num1 + num2 };

// can be shortened to
const addUpTwoNumbers = (num1, num2) => num1 + num2;
// braces {} and return removed
// ===================================================
// explicit return of object
const addUpTwoNumbers = (num1, num2) => {
  return { num1, num2 };
};

// implicit return of object
const addUpTwoNumbers = (num1, num2) => ({ num1, num2 });
```

If the function has only one parameter, the `()` can be omitted.
```javascript
const addUpTwoNumbers = num1 => num1 + num2;
```

### Callback
Callback function are functions passed as arguments. In other words, a function that calls another function (or more functions).
```javascript
const sideLength = 5;

// Caller function takes a callback function
function applySideLength(callback) {
  return callback(sideLength);
}

// Callback must expect the possible argument from the calling function
function areaOfSquare(side) {
  return side * side;
}

applySideLength(areaOfSquare); // => 25
```

## Null and Undefined

### Null

Empty value for any type.

> To check whether a variable is null, the strict equality operator `===` must be used. Although null is a primitive value, the `typeof` operator "wrongly" returns `object` for historic reasons. That means it cannot be used by itself to check whether a variable is null.
```javascript
let name = null;

name === null;
// => true

// Pitfall:
typeof name;
// => 'object'
```

### Undefined

A variable that has not been assigned a value is of type _undefined_. That means while null represents an empty value (but still a value), _undefined_ represents the total absence of a value.

- If a variable is declared **without** a value (initialization), it is _undefined_.
- If you try to access a value for a **non-existing key** in an object, you get _undefined_.
- If a function **does not return a value**, the result is _undefined_.
- If an **argument is not passed** to a function, it is _undefined_, unless that argument has a default value.

```javascript
let name;
console.log(name);
// => undefined

let obj = { greeting: 'hello world' };
console.log(obj.missingKey);
// => undefined

function returnNothing() {
  return;
}
console.log(returnNothing());
// => undefined
```

To check if a variable is undefined, use the strict equality operator `===` or `typeof`
```javascript
let name;

name === undefined;
// => true

typeof name === 'undefined';
// => true
```

### Nullish Coalescing

The nullish coalescing operator `??` returns the right-hand side operand **only when the left-hand side operand is __null__ or _undefined_**. Otherwise, the left-hand side operand is returned.

```javascript
let amount = null;
amount = amount ?? 1;
// => 1

amount = 0;
amount = amount ?? 1;
// => 0
```