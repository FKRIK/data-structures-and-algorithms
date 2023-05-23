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

    echo "The input number is {$inputNumber}" . PHP_EOL;

    // for ($contador = 0; $contador < sizeof(NUMBERS); $contador++) {
    //     if(array_key_first())
    // }

    $value = 10;
    // var_dump(array_search($value, $numbers, true));
    // die;

    var_dump(array_search($value, $numbers));die;


    // foreach(NUMBERS as $value){
    //     if (key() != $inputNumber) continue;
    // }


    echo key(NUMBERS);

    // if (key_exists($inputNumber, NUMBERS)){
    //     echo "{$inputNumber} in Roman Numerals is " . key(NUMBERS) . PHP_EOL;
    //     // echo "The key exists!";
    // }

    // foreach (NUMBERS as $value){
    //     if (!key_exists($inputNumber, NUMBERS)){
    //         continue;
    //     }

    //     echo "{$inputNumber} in Roman Numerals is {$value}" . PHP_EOL;
    // }


    // foreach (NUMBERS as $value) {
    //     if (key($value) === $inputNumber){
    //         echo "{$inputNumber} in Roman Numerals is " . key($value);
    //     }
    // }

    echo "Teste";

    // if (array_key_exists($inputNumber, NUMBERS)){
    //     echo "{$inputNumber} in Roman Numerals is  ";
    // }

    // foreach (NUMBERS as $number) {
    //     echo $number . PHP_EOL;
    // }

    return;
}

transcribeToRomanNumerals(50);