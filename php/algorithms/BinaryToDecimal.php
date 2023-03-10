<?php declare(strict_types=1);

function binaryToDecimal($binaryString): int{
    $binaryArray = str_split(strrev($binaryString));
    $totalSum = 0;
    
    for($counter = 0; $counter < count($binaryArray); $counter++){
        if ($binaryArray[$counter] != '0' || $binaryArray[$counter] != '1') {
            throw new \InvalidArgumentException('');
        }
        $result = (2 ** $counter) * $binaryArray[$counter];
        $totalSum = $totalSum + $result;
    }
    return $totalSum;
}

echo binaryToDecimal("100001") . PHP_EOL;