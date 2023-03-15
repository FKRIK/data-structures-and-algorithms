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
        if($this->bloqueada == true){
            return "Bloqueada";
        }
        
        return "Desbloqueada";
    }

    // Implementation of methods
    public function depositar($value){
        // if($this->bloqueada == true){
        //     echo "Sua conta está bloqueada. Desbloqueie-a para poder usá-la." . PHP_EOL;
        //     return;
        // }
        
        if($this->isBlocked()){
            echo "Sua conta está bloqueada. Desbloqueie-a para poder usá-la." . PHP_EOL;
            return;
        }
        $this->saldo += $value;
        return;
    }

    public function sacar($value){
        if($this->isBlocked()){
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
        if($this->isBlocked()){
            echo "Sua conta já está bloqueada" . PHP_EOL;
            return;
        }
        $this->bloqueada = true;
        return;
    }

    public function desbloquear(){
        if(!$this->bloqueada == true){
            echo "Sua conta já esta desbloqueda" . PHP_EOL;
            return;
        }
        $this->bloqueada = false;
        return;
    }

    public function alterarLimite(){
        if($this->bloqueada){
            echo "Sua conta está bloqueada. Desbloqueie-a para poder usá-la." . PHP_EOL;
            return;
        }

        if($this->getSaldo() == 0){

        }
    }

    // toString
    public function toString(){
        echo 
          "Olá! o número da sua conta é " . $this->getAccNumber() . ". \n"
        . "O saldo atual é de " . $this->getSaldo() . ". \n"
        . "O limite atual é de " . $this->getLimite() . ". \n"
        . "Sua conta está " . strtolower($this->isBlocked()) . PHP_EOL;
        
        return ;
    }

}