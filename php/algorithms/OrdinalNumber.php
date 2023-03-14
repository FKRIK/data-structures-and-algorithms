<?php

function lastDigit(int $num){
    return $num % 10;
}


function toOrdinal(int $number){
    if($number == 0){
        return "$number";
    }
    $lastNumber = lastDigit($number);

    if($number > 10 && $number < 20){
        return $number . "th";
    }

    switch ($lastNumber) {
        case 0:
            $result = $number . "th";
            break;
        case 1:
            $result = $number . "st";
            break;

        case 2:
            $result = $number . "nd";
            break;

        case 3:
            $result = $number . "rd";
            break;
        
        default:
            $result = $number . "th";
            break;
    }

    return $result;
}

echo toOrdinal(0);