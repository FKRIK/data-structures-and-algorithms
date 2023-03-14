<?php
require('Account.php');

$conta = new Account(1000);

echo $conta->getAccNumber();
echo $conta->getSaldo();
$conta->depositar(400);
echo $conta->getSaldo();
echo $conta->getLimite();

// number
// 0
// 400
// 300