<?php declare(strict_types=1);

function transcribeRNA(string $dna) : string{
    $dnaArray = str_split($dna);

    for ($counter = 0; $counter < count($dnaArray); $counter++) { 
        switch($dnaArray[$counter]){
            case "G":
                $dnaArray[$counter] = "C";
                break;
            case "C":
                $dnaArray[$counter] = "G";
                break;
            case "T":
                $dnaArray[$counter] = "A";
                break;
            case "A":
                $dnaArray[$counter] = "U";
                break;
        }
    }

    return implode($dnaArray);

}
echo transcribeRNA("GCTA");
?>