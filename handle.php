<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

$opt = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

$pdo = new PDO("mysql:dbname=db;host=localhost;charset=utf8",'root','211996dima',$opt);

$result = $pdo->query("SELECT * FROM os_user");
while ($row = $result->fetchAll(PDO::FETCH_ASSOC))
{
    //print_r($row);
}

$data = 'asd';

$res = $pdo->prepare("INSERT INTO os_project (name,about) values (:data, :data2)");
$res->execute(array('data' => $data, 'data2' => 'asd1'));

?>