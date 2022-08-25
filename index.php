<?php

$link = mysqli_connect("mk-nalshik.default", "Andrey", "Qwerty123");

if ($link == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    print("Соединение установлено успешно");
}
?>