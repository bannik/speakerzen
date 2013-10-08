<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

			$hostname="localhost";
			$user = "root";
			$pass = "";
			$id=$_GET["q_id"];
			try {
				$db = new PDO("mysql:host=$hostname;dbname=qs", $user, $pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
				$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
					$sql = "SELECT * FROM `questions` where id>=$id";
					$speakers = $db->query($sql);
					$result = $speakers->fetch();

					$db = null; // close the database connection

				}catch(PDOException $e)
				{
					echo $e->getMessage();
				}
echo json_encode($result);

?>
