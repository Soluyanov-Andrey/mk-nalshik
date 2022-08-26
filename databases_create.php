<?php
/**
 *  Запуская данный файл,  скрипт создает таблицу в базе данных и ее заполняет.
 */
mb_internal_encoding("UTF-8");


$mysqli = new mysqli("mk-nalshik.default", "Andrey", "Qwerty123", "mk-nalshik");

$mysqli->query("SET NAMES 'utf8'"); 
$mysqli->query("SET CHARACTER SET 'utf8'");
$mysqli->query("SET SESSION collation_connection = 'utf8_general_ci'");

// Чистый пример запроса на sql.
// CREATE TABLE gamer_ecording
// (
//     id INT NOT NULL AUTO_INCREMENT COMMENT 'id таблицы',
// 	   slug VARCHAR(50) NOT NULL  COMMENT 'Человекопонятный id',
// 	   name VARCHAR(300) NOT NULL  COMMENT 'Название игры',
//     description VARCHAR(50) NOT NULL  COMMENT 'Описание игры',
//     released DATE NOT NULL  COMMENT 'Дата выхода',
//     poster VARCHAR(2083) NOT NULL  COMMENT 'Url картинки игры',
//     rating INT  NOT NULL,
//     PRIMARY KEY (id),
//     UNIQUE KEY (slug )
// ) ENGINE = InnoDB COMMENT 'Таблица для записей игр';

$query = 'CREATE TABLE `gamer_ecording`
(
    `id` INT NOT NULL AUTO_INCREMENT COMMENT \'id таблицы\',
	`slug` VARCHAR(50) NOT NULL COMMENT \'Человекопонятный id\',
    `name` VARCHAR(300) NOT NULL COMMENT \'Название игры\',
    `description` VARCHAR(1000) NOT NULL COMMENT \'Описание игры\',
    `released` DATE NOT NULL COMMENT \'Дата выхода\',
    `poster` VARCHAR(2083) NOT NULL COMMENT \'Url картинки игры\',
    `rating` INT  NOT NULL,
     PRIMARY KEY (`id`),
     UNIQUE KEY (`slug`)
 ) ENGINE = InnoDB DEFAULT CHARSET=utf8 COMMENT \'Таблица для записей игр\';';

$mysqli->query($query);
var_dump($mysqli);

// Чистый пример запроса на sql.
//INSERT INTO gamer_ecording VALUES (NULL,'ТОВАР','ТОВАР','ТОВАР','2007-10-23','http/12/14',0); 

$query = '
INSERT INTO gamer_ecording VALUES
 (\'NULL\',\'Prins\',\'Принц персия\',\'Prince of Persia — серия компьютерных игр в жанре action-adventure. Первая игра серии была создана Джорданом Мекнером и компанией Brøderbund. \',\'1989-01-01\',\'/images/game.jpg\',100),
 (\'NULL\',\'Stray\',\'Stray\',\'Lost, alone, and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten cybercity and find the way home\',\'2022-01-01\',\'/images/game.jpg\',52),
 (\'NULL\',\'The_Quarry\',\'The Quarry\',\' The Quarry — компьютерная игра в жанрах интерактивного фильма и survival horror, созданная Supermassive Games и изданная 2K Games 10 июня 2022 года. Она является духовным наследником Until Dawn и была выпущена для Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S  \',\'2022-05-10\',\'/images/game.jpg\',35),
 (\'NULL\',\'Cult_Lamb\',\'Cult of the Lamb\',\' Cult of the Lamb — это приключенческая игра в жанре roguelike, разработанная независимым разработчиком Massive Monster и изданная Devolver Digital. Игра была выпущена 11 августа 2022 года для macOS, Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One и Xbox Series X/S. \',\'2022-07-11\',\'/images/game.jpg\',24),
 (\'NULL\',\'Forspoken\',\'Forspoken\',\'Переведено с английского языка.-Forspoken — предстоящая ролевая игра, разработанная Luminous Productions и изданная Square Enix. Он должен выйти 24 января 2023 года на PlayStation 5 и Windows.\',\'2023-01-24\',\'/images/game.jpg\',0),
 (\'NULL\',\'Hogwarts_Legacy\',\'Hogwarts Legacy\',\' Hogwarts Legacy — предстоящая мультиплатформенная компьютерная ролевая игра, разрабатываемая американской студией Avalanche Software и издаваемая Warner Bros. Interactive Entertainment под лейблом Portkey Games. Действие игры разворачивается в фэнтезийной вселенной «Гарри Поттера» в XIX веке. \',\'2023-01-01\',\'/images/game.jpg\',42),
 (\'NULL\',\'Saints_Row\',\'Saints Row\',\' Saints Row — серия мультиплатформенных компьютерных игр, разработанных американской компанией Volition и изданных компаниями THQ и Deep Silver. Первая игра серии вышла в 2006 году, всего серия насчитывает пять игр, не считая самостоятельного дополнения Saints Row: Gat Out of Hell. \',\'2006-01-01\',\'/images/game.jpg\',55),
 (\'NULL\',\'Scorn\',\'Scorn\',\'Scorn — находящаяся в разработке компьютерная игра в жанре шутера от первого лица с элементами приключенческой . \',\'2022-07-21\',\'/images/game.jpg\',87),
 (\'NULL\',\'Diablo_IV\',\'Diablo IV\',\' Diablo IV — находящаяся в разработке компьютерная игра компании Blizzard Entertainment, продолжение игровой серии Diablo. Игра была анонсирована на BlizzCon 1 ноября 2019 года для платформ Windows, PlayStation 4, PlayStation 5, Xbox One и Xbox Series X/S.\',\'2023-07-01\',\'/images/game.jpg\',24),
 (\'NULL\',\'Escape_Academy\',\'Escape Academy\',\'Escape Academy — своеобразная игроизация популярных квестов из реальной жизни, работающая по тем же принципам и увлекающая не меньше, особенно если проходить её в кооперативе. Загадки очень разнообразны, равно как локации и ситуации, в которые помещают главного героя, поэтому игра оставляет очень приятное послевкусие. \',\'2022-05-24\',\'/images/game.jpg\',28),
 (\'NULL\',\'Thymesia\',\'Thymesia\',\'Thymesia это дебютный проект OverBorder Studio, которую взял под свое крыло издатель Team 17. Под его именем выходили игры самых разных жанров. От аркад типа Yooka-Laylee до мрачных метроидваний как Blasphemous и, конечно же, легендарной серии Worms. \',\'2022-08-21\',\'/images/game.jpg\',74)
 ';
 $mysqli->query($query);
 var_dump($mysqli);



?>