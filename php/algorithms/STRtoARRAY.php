<?php declare(strict_types=1);

function calculateHammingDistance(string $correctDNA, string $wrongDNA) : int{
    $arrayDNA1 = str_split($correctDNA);
    $arrayDNA2 = str_split($wrongDNA);
    $distance = 0;
    $counter = 0;

    if(sizeof($arrayDNA1) != sizeof($arrayDNA2)){
        throw new InvalidArgumentException("DNA strands must be of equal length.");
    }

    // Solution using FOREACH
    foreach ($arrayDNA1 as $letras) {
        if($letras != $arrayDNA2[$counter]){
            $distance += 1;
        }
        $counter++;
    }

    // Solution using FOR - the $counter declared on line 7 can be omitted, as it will be created below
    // for ($counter = 0; $counter < sizeof($arrayDNA1); $counter++) { 
    //     if($arrayDNA1[$counter] != $arrayDNA2[$counter]){
    //         $distance += 1;
    //     }
    // }
    return $distance;
}

echo calculateHammingDistance("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT") . PHP_EOL;