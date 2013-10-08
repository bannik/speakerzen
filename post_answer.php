<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

			$hostname="localhost";
			$user = "root";
			$pass = "";
			$choice=$_POST["choice"];

			if($choice==1)
			{
				$ch="choicea";
			}
			if($choice==2)
			{
				$ch="choiceb";
			}
			if($choice==3)
			{
				$ch="choicec";
			}
			if($choice==4)
			{
				$ch="choiced";
			}
			if($choice==5)
			{
				$ch="choicee";
			}


			$id=$_POST['id']-1;
			try {
				$db = new PDO("mysql:host=$hostname;dbname=qs", $user, $pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
				$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
					$sql = "UPDATE `answers` SET `$ch` = `$ch` +1 WHERE q_id =$id";
					$speakers = $db->query($sql);
					$result = $speakers->fetch();

					$db = null; // close the database connection

				}catch(PDOException $e)
				{
					echo $e->getMessage();
				}
echo json_encode($result);

?>
