const EXPECTED_MINUTES_IN_OVEN = 40;
const EXPECTED_MINUTES_PER_LAYER = 2;

function remainingMinutesInOven(tempoAtual){
    return EXPECTED_MINUTES_IN_OVEN - tempoAtual;
}

function preparationTimeInMinutes(camadas){
    return EXPECTED_MINUTES_PER_LAYER * camadas;
}

function totalTimeInMinutes(camadass, tempoAtual){
    let tempoCamadas = preparationTimeInMinutes(camadass);
    return tempoCamadas + tempoAtual;
}


console.log(totalTimeInMinutes(3, 20));