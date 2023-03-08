const getFirstCard = deck => deck.shift();
// console.log(getFirstCard([5, 9, 7, 1, 8]));

const getSecondCard = deck => deck.at(2 - 1);
// console.log(getSecondCard([5, 9, 7, 1, 8]));

const swapTopTwoCard = deck => {
    let [a, b, ...others] = deck;
    return [b, a, ...others];

    // let a = deck[0];
    // let b = deck[1];
    // let extractedArray = deck.slice(3);    
    // return [b, a, ...extractedArray]
}
// console.log(swapTopTwoCard([10, 7, 3, 8, 5]));

const discardTopCard = deck => {
    let extractFirstElement = deck.shift();

    return [extractFirstElement, deck];
}
// console.log(discardTopCard([10, 7, 3, 8, 5]));

let faceCards = ["jack", "queen", "king"];

const insertFaceCards = deck => {
    let [a, ...otherCards] = deck;
    return [a, ...faceCards, ...otherCards];
}
// console.log(insertFaceCards([5, 4, 7, 10]));