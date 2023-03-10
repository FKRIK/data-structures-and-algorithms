<?php 

function buildDiamond(string $inputLetter){
    $inputAlphabet = "abcdefghijklmnopqrstuvwxyz";
    $alphabet = strtoupper($inputAlphabet);
    // OK: Capture input letter
    // OK: Convert to upper
    $letter = strtoupper($inputLetter);

    // OK: Find its position on alphabet
    $letterPositon = strpos($alphabet, $letter) + 1;

    // OK: Capture the letters that came before and keep it into an array
    $pastLetters = array();
    $alphabetArray = str_split($alphabet);
    for ($counter = 0; $counter < $letterPositon - 1; $counter++) { 
        $pastLetters[$counter] = $alphabetArray[$counter];
    }

    // OK: Copy the array above, but invert the letters => see ReverseString.php
    $reversedPastLetters = array_reverse($pastLetters);

    // OK: Mount an array => [pastLetters, letter, reversedPastLetters]
    $result = array_merge((array)$pastLetters, (array)$letter, (array)$reversedPastLetters);
    
    foreach ($result as $value) {
        echo $value . PHP_EOL;
    }

    // OK: Get the horizontal length of the diamond => (letterPosition * 2) - 1
    $horizontalLength = ($letterPositon * 2) - 1;

    // See how to make blank spaces (??)
    // $blankSpaces = array();
    // $blankSpaces = explode(" ", $horizontalLength);
    
    

    

    // return $blankSpaces;
}


echo buildDiamond("e") . PHP_EOL;



// $conj = array(" A ","B B"," A ");

// for ($i=0; $i < sizeof($conj); $i++) { 
//     echo $conj[$i] . PHP_EOL;
// }
    

