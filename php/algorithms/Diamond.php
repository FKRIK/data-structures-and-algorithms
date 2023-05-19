<?php

function buildDiamond(string $inputLetter)
{
    $letter = strtoupper($inputLetter);
    // OK: Capture input letter
    // OK: Convert to upper

    $letters = range('A', $letter);
    // OK: Capture the letters that came before and keep it into an array
    // print_r($letters);
    // die;

    // OK: Get the horizontal length of the diamond => (letterPosition * 2) - 1
    $horizontalLength = (array_search($letter, $letters) + 1) * 2 - 1;
    // var_dump($horizontalLength);
    // die;

    $insideSpace = 1;
    foreach ($letters as $value) {
        if ($value === 'A'){
            $diamond[] = str_pad($value, $horizontalLength, '-', STR_PAD_BOTH);
            continue; //Breaks one iteration of the loop
        }
        $diamond[] = str_pad($value . str_repeat('-', $insideSpace) . $value, $horizontalLength, '-', STR_PAD_BOTH);
        $insideSpace += 2;
    }

    $finalDiamond = array_merge($diamond, array_slice(array_reverse($diamond), 1));
    return $finalDiamond;
}

$variable = buildDiamond("l");

foreach ($variable as $value) {
    echo $value . PHP_EOL;
}


// -----------Another way. Duplicating the initial letters array
function diamond(string $input)
{
    $range = range('A', strtoupper($input)); //Array

    $padding = (ord(end($range)) - ord(reset($range))) * 2 + 1; //Int 5

    $space = 1;
    foreach ($range as $letter) {
        if ($letter === 'A') {
            $result[] = str_pad($letter, $padding, '-', STR_PAD_BOTH);

        } else {
            $result[] = str_pad($letter . str_repeat('-', $space) . $letter, $padding, '-', STR_PAD_BOTH);
            $space += 2;
        }
    }

    return array_merge(
        $result,
        array_slice(array_reverse($result), 1)
    );
}
