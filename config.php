<?php
error_reporting(0);

date_default_timezone_set('Asia/Calcutta');



$servername = "localhost";

$database = "major";

$username = "root";

$password = "";



// Create connection



$conn = mysqli_connect($servername, $username, $password, $database);

mysqli_query($conn, "SET SESSION sql_mode = ''");

// Check connection



// if ($conn->connect_error) {

// die("Connection failed: " . $conn->connect_error);





//echo "Connected successfully";



//mysqli_close($conn);



?>