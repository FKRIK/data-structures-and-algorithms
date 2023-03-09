<?php 

function buildDiamond(string $inputLetter){
    $inputAlphabet = "abcdefghijklmnopqrstuvwxyz";
    $alphabet = strtoupper($inputAlphabet);
    // OK: Capture input letter
    // OK: Convert to upper
    $letter = strtoupper($inputLetter);

    // OK: Find its position on alphabet
    $letterPositon = strpos($alphabet, $letter) + 1;

    $pastLetters = null;
    $alphabetArray = str_split($alphabet);
    // Capture the letters that came before and keep it into an array
    for ($counter = 0; $counter < sizeof($alphabetArray[$letterPositon - 1]); $counter++) { 
        $pastLetters = $pastLetters . $alphabetArray[$letterPositon];    
    }

    return $pastLetters;
    
    // Copy the array below, but invert the letters => see ReverseString.php
    // Mount an array => [lettersBefore, inputLetter, lettersBeforeInverted]

    // OK: Get the horizontal length of the diamond => (letterPosition * 2) - 1
    // $horizontalLength = ($letterPositon * 2) - 1;

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
    

