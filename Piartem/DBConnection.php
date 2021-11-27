<?php
	define ('hostname', 'localhost');
	define ('username', 'wp5kgtotrtlz');
	define ('password', 'CBAartem2018!');
	define ('databasename', 'piartem');
	
	class DBConnection {
		private $connect;
		function __construct() {
			$this->connect = mysqli_connect(hostname,username,password,databasename);
		}
		
		public function getConnection() {
			return $this->connect;
		}
	}
?>