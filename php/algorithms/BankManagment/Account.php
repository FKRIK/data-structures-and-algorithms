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
        return $this->numero;
    }

    public function getSaldo(){
        return $this->saldo;
    }

    public function getLimite(){
        return $this->limite;
    }

    public function isBlocked(){
        if($this->bloqueada){
            return "Bloqueada";
        }
        
        return "Desbloqueada";
    }

    // Implementation of methodsx
    public function depositar($value){
        if($this->bloqueada){
            echo "Sua conta está bloqueada. Desbloqueie-a para poder usá-la.";
            return;
        }
        $this->saldo += $value;
        return;
    }

    public function sacar($value){
        if($this->bloqueada){
            echo "Sua conta está bloqueada. Desbloqueie-a para poder usá-la.";
            return;
        }
        if($this->saldo < $value){
            echo "Você não tem saldo suficiente para fazer este saque.";
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
        if($this->bloqueada){
            echo "Sua conta está bloqueada. Desbloqueie-a para poder usá-la.";
            return;
        }

        if($this->getSaldo() == 0)
    }

    // toString
    public function toString(){
        return 
          "Olá! o número da sua conta é " . $this->getAccNumber() . ". \n"
        . "O saldo atual é de " . $this->getSaldo() . ". \n"
        . "O limite atual é de " . $this->getLimite() . ". \n"
        . "Sua conta está " . strtolower($this->isBlocked());
    }

}