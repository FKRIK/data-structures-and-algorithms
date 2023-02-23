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
