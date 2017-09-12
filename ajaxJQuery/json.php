<?php
	// array com referente a 3 pessoas
    $var = Array(
    array(
        "nome"=>"João",
        "sobreNome"=>"Silva",
        "cidade"=>"Taquara"
    ),
    array(
        "nome"=>"Silvia",
        "sobreNome"=>"Rocha",
        "cidade"=>"Parobé"
    ),
    array(
        "nome"=>"Carina",
        "sobreNome"=>"Valério",
        "cidade"=>"Igrejinha"
    ),
    array(
        "nome"=>"Pedro",
        "sobreNome"=>"Alves",
        "cidade"=>"Taquara"
    )
	);
	// convertemos em json e colocamos na tela
    echo json_encode($var);

?>