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
