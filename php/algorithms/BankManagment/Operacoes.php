<?php

interface Operacoes{
    function depositar();
    function sacar();
    function transferir();
    function bloquear();
    function alterarLimite();
}