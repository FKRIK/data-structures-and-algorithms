// COMMON way
// function getCardPosition(stack, card){
//     return stack.indexOf(card)
// }

// FIRST way using arrow function
// const getCardPosition = (stack, card) => {
//     return stack.indexOf(card);
// }

// SECOND way using arrow function
const getCardPosition = (stack, card) => stack.indexOf(card);
// console.log(getCardPosition([9, 7, 3, 2], 2));

const doesStackIncludeCard = (stack, card) => stack.includes(card);
// console.log(doesStackIncludeCard([9, 7, 3, 2], 2));

// const isEachCardEven = stack => {
//     for (let index = 0; index < stack.length; index++) {
//         if(stack[index] % 2 !== 0){
//             return false;
//         }
//     }
//     return true;
// }

const isEachCardEven = stack => stack.every(a => a % 2 == 0);
// console.log(isEachCardEven([2, 4, 6, 7]));

const doesStackIncludeOddCard = stack => !isEachCardEven(stack);
// console.log(doesStackIncludeOddCard([4, 2, 6, 4, 8]));

const getFirstOddCard = stack => stack.find(a => a % 2 != 0);
// console.log(getFirstOddCard([4, 2, 8, 7, 9]));

const getFirstEvenCardPosition = stack => stack.findIndex(a => a % 2 == 0);
// console.log(getFirstEvenCardPosition([5, 2, 3, 1]));