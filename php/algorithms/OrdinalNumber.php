<?php

function toOrdinal(int $number){
    $numberArray = str_split($number);
    
    if($numberArray[0] == 1 && $numberArray[1] > 4){
        $result = $number . "th";
    }

    for($counter = 0; $counter < 9; $counter++){
        if($numberArray[$counter] == $counter){
            $result = $number . "th";
        }
    }

    switch ($numberArray[count($numberArray ) - 1]) {
        case "0":
            $result = (string) $number;
            break;

        case '1':
            $result = $number . "st";
            break;

        case '2':
            $result = $number . "nd";
            break;

        case '3':
            $result = $number . "rd";
        
        default:
            $result = $number . "th";
            break;
    }

    return $result;

    // print_r(array_values($numberArray));
    // var_dump($numberArray[0]);
}

echo toOrdinal(10);