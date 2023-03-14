<?php
require("IOperacoes.php");

class Account implements IOperacoes{
    private $numero;
    private $saldo;
    private $limite;
    private $bloqueada;

    public function __construct($balance = 0){
        if($balance != 0){
            $this->limite = $balance + ($balance * 1.2);
        }else{
            $this->limite = 1000;
        }
        $this->numero = rand(1, 1000);
        $this->saldo = $balance;
        $this->bloqueada = false;
    }

    public function getAccNumber(){
        return $this->numero . PHP_EOL;
    }

    public function getSaldo(){
        return $this->saldo . PHP_EOL;
    }

    public function getLimite(){
        return $this->limite . PHP_EOL;
    }

    // Implementation of methodsx
    public function depositar($value){
        if($this->bloqueada){
            echo "Sua conta está bloqueada. Desbloqueie-a para poder usá-la." . PHP_EOL;
            return;
        }
        $this->saldo += $value;
        return;
    }

    public function sacar($value){
        if($this->bloqueada){
            echo "Sua conta está bloqueada. Desbloqueie-a para poder usá-la." . PHP_EOL;
            return;
        }
        if($this->saldo < $value){
            echo "Você não tem saldo suficiente para fazer este saque." . PHP_EOL;
            return;
        }

        $this->saldo -= $value;
        return;            
    }
    
    public function transferir($value){
        
    }

    public function bloquear(){
        $this->bloqueada = true;
        return;
    }

    public function alterarLimite(){
        
    }

}