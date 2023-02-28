function totalBirdCount(array){
    let sum = 0;
    for(let counter = 0; counter < array.length; counter++){
        sum += array[counter];
    }
    return sum;
}
// console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]));

function birdsInWeek(array, weeks){
    let sum = 0;
    for(let i = 7*(weeks-1); i < 7*weeks; i++){
        sum += array[i]
    }
    return sum
}
// console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 1));

function fixBirdCountLog(array){
    for(let counter = 0; counter < array.length; counter += 2){
        array[counter]++
    }
    return array;    
}
// console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]));
