<?php

interface IOperacoes{
    function depositar($value);
    function sacar($value);
    function transferir($value);
    function bloquear();
    function desbloquear();
    function alterarLimite();
}