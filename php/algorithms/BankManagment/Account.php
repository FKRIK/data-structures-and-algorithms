<?php

class Account implements Operacoes{
    private $numero;
    private $saldo;
    private $limite;
    private $bloqueada;

    public function __construct(){
        $this->numero= rand(1, 1000);
    }

    public function getAccNumber(){
        return $this->numero . PHP_EOL;
    }

    public function depositar(){
        
    }

    public function sacar(){
        
    }
    
    public function transferir(){
        
    }

    public function bloquear(){
        
    }

    public function alterarLimite(){
        
    }

}