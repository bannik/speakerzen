<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

			$hostname="localhost";
			$user = "root";
			$pass = "1234";
			$id=$_POST['id']-1;
			$choice=$_POST['choice'];
			$freetext=$_POST['text'];
			if($choice==0){
				$ch="no";
			}
			else if($choice==1){
				$ch="yes";
			}
			try {
				$db = new PDO("mysql:host=$hostname;dbname=qs", $user, $pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
				$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
				if(!$freetext){
					$sql = "UPDATE `answers` SET `$ch` = `$ch` +1 WHERE q_id =$id";
					$speakers = $db->query($sql);
					$result = $speakers->fetch();
				}
					$db = null; // close the database connection

				}catch(PDOException $e)
				{
					echo $e->getMessage();
				}
echo json_encode($result);

?>
