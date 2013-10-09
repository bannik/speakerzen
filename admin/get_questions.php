<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

			$hostname="localhost";
			$user = "root";
			$pass = "1234";
			try {
				$i=0;
				$db = new PDO("mysql:host=$hostname;dbname=qs", $user, $pass,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
				$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
						$sql = "SELECT * FROM `questions`";
						$questions = $db->query($sql);
						while($result = $questions->fetch())
						{
							$question=$result;
							$Array[$i]=$question;
							$i++;
						}
				$i=0;
				$sql = "SELECT * FROM `answers` where q_id>0";
				$answers = $db->query($sql);
				while($result = $answers->fetch())
				{
					$Array[$i]["choice1"]=$result["yes"];
					$Array[$i]["choice2"]=$result["no"];
					$i++;
				}
				}catch(PDOException $e)
				{
					echo $e->getMessage();
				}
				$db = null; // close the database connection

echo json_encode($Array);

?>
