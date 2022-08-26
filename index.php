<?php

include('add_function.php');

$url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
echo $url;

$mysqli = new mysqli("mk-nalshik.default", "Andrey", "Qwerty123", "mk-nalshik");

$mysqli->query("SET NAMES 'utf8'"); 
$mysqli->query("SET CHARACTER SET 'utf8'");
$mysqli->query("SET SESSION collation_connection = 'utf8_general_ci'");

var_dump(add_function::selection_of_parts($url));
echo(count(add_function::selection_of_parts($url)));


// Для endpoint  GET   /game/[slug]

if (count(add_function::selection_of_parts($url)) == 3){

$result = $mysqli->query("SELECT * FROM gamer_ecording ");

$typeArray = array();

while($row = $result->fetch_array()) {
    $gl_massages = array(

        "id" => $row['id'],
        "slug" => $row['slug'],
        "name" => $row['name'],
        "description" => $row['description'],
        "released" => $row['released'],
        "poster" => $row['poster'],
        "rating" => $row['rating']
    );
   
    
    
     array_push($typeArray, $gl_massages);
}
}

// Для endpoint   GET   /games 

if (count(add_function::selection_of_parts($url)) == 2){

    $result = $mysqli->query("SELECT * FROM gamer_ecording ");
    $typeArray = array();
    
    while($row = $result->fetch_array()) {
        $gl_massages = array(
    
            "id" => $row['id'],
            "slug" => $row['slug'],
            "name" => $row['name'],
            "poster" => $row['poster'],
            "rating" => $row['rating']
        );
       
        
        
         array_push($typeArray, $gl_massages);
    }
    }

$json = json_encode($typeArray ,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
echo $json;




