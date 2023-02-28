<?php 

class Resistor{
    // Properties
    private $faixas = array();

    // Constructor
    function __construct($faixa1, $faixa2, $faixa3, $faixa4){
        $this->faixas[] = "$faixa1, $faixa2, $faixa3, $faixa4";
    }

    public function getFaixas(){
        // foreach ($this->faixas as $item) {
        //     echo $item . "\n";
        // }

        return;
    }
}



$r1 = new Resistor("Marron", "Laranja", "Vermelho", "Dourado");
// $r1->addColors();
$r1->getFaixas();

$a1 = array(array("Preto"=>"0", "Marrom"=>"1", "Vermelho"=> "2", "Laranja"=>"3", "Amarelo"=>"4"),
            array(1, 10, 100),
            array('tolerância'));





// $cars = array("BMW", "Volvo");
// WORKS
// foreach ($cars as $item) {
//     echo "$item \n";
// }

// DOES NOT WORK
// for($i = 0; $i < count($cars); $i++){
//     echo $cars[i];
// }