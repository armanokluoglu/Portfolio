<?php
require_once 'DBConnection.php';
//header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');
class User {
	private $db;
	private $connection;
	function __construct() {
		$this->db = new DBConnection();
		$this->connection = $this->db->getConnection();
	}
	public function registerUser ($name, $lastname, $email, $reason, $city, $school, $phone) {
		$emailQuery = "SELECT * FROM users WHERE email = '$email';";
		$emailResult = mysqli_query($this->connection, $emailQuery);
		if (mysqli_num_rows($emailResult) > 0) {
			echo json_encode("Bu e-posta adresiyle hesap oluşturulmuş.");
		} else {
			mysqli_set_charset($this->connection, "utf8");
			$query = "INSERT INTO users (name,lastname,email,reason,city,school,phone) VALUES ('$name', '$lastname','$email','$reason','$city','$school', '$phone');";
			$registerStatus = mysqli_query($this->connection, $query);
			if ($registerStatus == 1) {
				header( 'Location: http://piartem.com/success.html' );
			} else {
				echo json_encode('Bağlantıda bir hata oluştu, lütfen tekrar deneyin.');
			}
		}
		echo json_encode($json);
		mysqli_close($this->connection);
	}
}

$user = new User();
if (isset($_POST['name'], $_POST['surname'], $_POST['email'], $_POST['reason'])) {
	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$email = $_POST['email'];
	$reason = $_POST['reason'];
	
	if ($name != "" && $surname != "" && $email != "" && $reason != "") {
		if(isset($_POST['city'])) {
			$city = $_POST['city'];
		} else {
			$city = " ";
		}
		if(isset($_POST['school'])) {
			$school = $_POST['school'];
		} else {
			$school  = " ";
		}
		if(isset($_POST['phone'])) {
			$phone = $_POST['phone'];
		} else {
			$phone = " ";
		}
		
		$user -> registerUser($name, $surname, $email, $reason, $city, $school, $phone);
	} else {
		echo json_encode("Ad, soyad  ve e-posta adresi doldurulması zorunlu alanlardır.");
	}
	
	
 } else {
	echo json_encode("Sunucuda bir hata olustu. Lütfen tekrar deneyin.");
}
?>