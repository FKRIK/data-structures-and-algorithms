<?php
require('Account.php');

$conta = new Account();

// echo $conta->getAccNumber();
// echo $conta->getSaldo();
// $conta->depositar(400);
// echo $conta->getSaldo();
// echo $conta->getLimite();

echo $conta->toString() . PHP_EOL;

// number
// 0
// 400
// 300