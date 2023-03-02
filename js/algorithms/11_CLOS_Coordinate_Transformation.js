function translate2d(dx, dy) {
  return function (x, y) {
    return [x + dx, y + dy];
  };
}
const moveCoordinatesRight2Px = translate2d(2, 0);
// ☝️ Because the function 'translate2d' returns a function, the variable 'moveCoordinatesRight2x' becomes a function.
const result = moveCoordinatesRight2Px(4, 8);
// console.log(moveCoordinatesRight2Px);     // Returns [Function]
// console.log(result);                      // Returnds [6, 8]

