<?php

define("VALUES", [
    1 => 'I',
    5 => 'V',
    10 => 'X',
    50 => 'L',
    100 => 'C',
    500 => 'D',
    1000 => 'M'
]);

function transcribeToRomanNumerals(int $inputNumber){
    echo "The input number is {$inputNumber}" . PHP_EOL;
    
    // print_r(array_keys(VALUES));die;

    if (array_key_exists($inputNumber, VALUES)){
        echo "It is the same number: "  . PHP_EOL;
    }
    
    // foreach (VALUES as $number) {
    //     break;
    // }

    return;
    
}

transcribeToRomanNumerals(50);