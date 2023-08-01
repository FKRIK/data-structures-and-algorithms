<?php

function transcribeToRomanNumerals(int $inputNumber)
{
    $numbers = [
        'I' => 1,
        'V' => 5,
        'X' => 10,
        'L' => 50,
        'C' => 100,
        'D' => 500,
        'M' => 1000
    ];

    foreach ($numbers as $n) {
        if($inputNumber == $n){
            echo implode((array_keys($numbers, $inputNumber))) . PHP_EOL;
        }
    }

    echo "The input number is {$inputNumber}" . PHP_EOL;


    return;
}

transcribeToRomanNumerals(49); // 1024 => MXXIV
                               // 1023 => MXXIII

                               // =============
                               // 1 - 3 => I
                               //   4   => IV
                               // 6 - 8 => I
                               //   9   => IX
                               // =============
