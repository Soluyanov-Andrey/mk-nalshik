<?php

include('add_function.php');

$url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$mysqli = new mysqli("mk-nalshik.default", "Andrey", "Qwerty123", "mk-nalshik");

$mysqli->query("SET NAMES 'utf8'"); 
$mysqli->query("SET CHARACTER SET 'utf8'");
$mysqli->query("SET SESSION collation_connection = 'utf8_general_ci'");


$segment_url = add_function::selection_of_parts($url);

if (count($segment_url) == 1 && $segment_url[0]==""){
$section = file_get_contents('index.html');
echo($section);
exit();
}

if (count($segment_url) == 2 && $segment_url[1]=="input"){

    $section = file_get_contents('index.html');
    echo($section);
    exit();
    }

// Для endpoint  GET   /game/[slug]

if (count($segment_url) == 3 && $segment_url[1]=="game"){
    
$result = $mysqli->query("SELECT * FROM gamer_ecording WHERE slug = '".$segment_url[2]."'");



while($row = $result->fetch_array()) {
    $typeArray = array(

        "id" => $row['id'],
        "slug" => $row['slug'],
        "name" => $row['name'],
        "description" => $row['description'],
        "released" => $row['released'],
        "poster" => $row['poster'],
        "rating" => $row['rating']
    );
   
    
}
}

// Для endpoint   GET   /games 

if (count($segment_url) == 2 && $segment_url[1]=="games"){

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




