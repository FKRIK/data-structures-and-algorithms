function getItem(array, position){
    return array[position];
}
// console.log(getItem([1, 2, 4, 1], 2));

function setItem(array, position, newCard){
    let deletedCard = array.splice(position, 1, newCard);
    return array;
}
// console.log(setItem([1, 2, 4, 1], 2, 6));

function insertItemAtTop(array, newCard){
    let addNewCard = array.push(newCard);
    return array;
}
// console.log(insertItemAtTop([5, 9, 7, 1], 8));

function removeItem(array, position){
    let removedList = array.splice(position, 1); 
    return array;
}
// console.log(removeItem([3, 2, 6, 4, 8], 2));

function removeItemFromTop(array){
    let removedFromTop = array.pop();
    return array;
}
// console.log(removeItemFromTop([3, 2, 6, 4, 8]));

function insertItemAtBottom(array, newCard){
    let insertFromBottom = array.unshift(newCard);
    return array;
}
// console.log(insertItemAtBottom([5, 9, 7, 1], 8));

function removeItemAtBottom(array){
    let removedFromBottom = array.shift();
    return array;
}
// console.log(removeItemAtBottom([8, 5, 9, 7, 1]));

function checkSizeOfStack(array, stackSize){
    if(array.length == stackSize){
        return true;
    }
    return false;
}
console.log(checkSizeOfStack([3, 2, 6, 4, 8], 4));