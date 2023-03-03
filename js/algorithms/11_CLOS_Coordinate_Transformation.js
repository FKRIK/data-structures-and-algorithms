function translate2d(dx, dy) {
  return function (x, y) {
    return [x + dx, y + dy];
  };
}
// const moveCoordinatesRight2Px = translate2d(2, 0);
// ☝️ Because the function 'translate2d' returns a function, the variable 'moveCoordinatesRight2x' becomes a function.
// const result = moveCoordinatesRight2Px(4, 8);
// console.log(moveCoordinatesRight2Px);     // Returns [Function]
// console.log(result);                      // Returnds [6, 8]

function scale2d(dx, dy) {
  return function (x, y) {
    return [x * dx, y * dy];
  };
}
// const doubleScale = scale2d(2, 2);
// const result = doubleScale(6, -3);
// console.log(result);

function composeTransformation(func1, func2) {
  return function (x, y) {
    let [a, b] = func1(x, y);
    // let second = func2(first);
    // return func2(first);
    return func2(a, b);
  };
}
// const moveCoordinatesRight2Px = translate2d(2, 0);
// // moveCoordinatesRight2Px()
// const doubleCoordinates = scale2d(2, 2);
// // doubleCoordinates()
// const composedTransformations = composeTransformation(
//   moveCoordinatesRight2Px,
//   doubleCoordinates
// );
// const result = composedTransformations(0, 1);
// // result => [4, 2]
// console.log(result);

// 👇 see that later
function memoizeTransform(f) {
  let previousX, previousY, previousResult;

  return function memoised(x, y) {
    if (previousX === x && previousY === y) {
      return previousResult;
    }

    previousX = x;

    previousY = y;

    return (previousResult = f(x, y));
  };
}
