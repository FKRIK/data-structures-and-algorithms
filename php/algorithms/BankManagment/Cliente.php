<?php 

class Cliente{
    private $nome;
    private $cpf;

    public function __construct($name, $cpf){
        $this->nome = $name;
        $this->cpf = $cpf;
    }
}

