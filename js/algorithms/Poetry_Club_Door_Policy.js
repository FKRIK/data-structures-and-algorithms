function frontDoorResponse(poemLine){
    return poemLine[0];
}

function frontDoorPassword(password){
    let firstLetter = password[0].toUpperCase();
    let minusFirst = password.slice(1).toLowerCase();
    return firstLetter + minusFirst;
}

// console.log(frontDoorPassword("TESTE"));

function backDoorResponse(poemLine){
    let trimmedString = poemLine.trim();
    let stringLenght = trimmedString.length;
    let getLastLetter = trimmedString[stringLenght - 1];
    // console.log(typeof(stringLenght));
    // console.log(trimmedString);
    // console.log(stringLenght);
    return getLastLetter;
}

//console.log(backDoorResponse("    Reins and harness    "));

function backDoorPassword(string){
    let firstLetter = string[0].toUpperCase();
    let minusFirst = string.slice(1).toLowerCase();
    return firstLetter + minusFirst + ', please';
}

console.log(backDoorPassword('horse'));