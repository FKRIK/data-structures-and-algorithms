const knightIsAwake = false;
const archerIsAwake = false;
const prisonerIsAwake = false;
const petDogIsPresent = true;

function canExecuteFastAttack(knightIsAwake){
    if(knightIsAwake == true){
        return false;
    }
    return true;
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake){
    if(knightIsAwake == false && archerIsAwake == false && prisonerIsAwake == false){
        return false;
    }
    return true;
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
    if(archerIsAwake == false && prisonerIsAwake == true){
        return true;
    }
    return false;
}

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent){
    if(petDogIsPresent == true){
        if(archerIsAwake == false){
            return true;
        }
        return false;
    }else{
        if(prisonerIsAwake == true && (knightIsAwake == false && archerIsAwake == false)){
            return true;
        }
        return false;
    }
}

console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));


// Free prisoner: Annalyn can try sneaking into the camp to free the prisoner. This is a risky thing to do and can only succeed in one of two ways:


// If Annalyn has her pet dog with her she can rescue the prisoner if the archer is asleep. The knight is scared of the dog and the archer will not have time to get ready before Annalyn and the prisoner can escape.

// If Annalyn does not have her dog then she and the prisoner must be very sneaky! Annalyn can free the prisoner if the prisoner is awake and the knight and archer are both sleeping, but if the prisoner is sleeping they can't be rescued: the prisoner would be startled by Annalyn's sudden appearance and wake up the knight and archer.

