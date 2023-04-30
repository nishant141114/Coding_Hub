<?php
// Start session
error_reporting(0);
session_start();
include("config.php");
require_once "config.php";

// Check if the form was submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Include config file
    
    
    // Get form data
    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);
    $confirm_password = trim($_POST["confirm_password"]);
    
    // Validate form data
    if(empty($username)){
        $error_message = "Please enter a username.";
    } else if(empty($email)){
        $error_message = "Please enter an email address.";
    } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $error_message = "Please enter a valid email address.";
    } else if(empty($password)){
        $error_message = "Please enter a password.";
    } else if(strlen($password) < 6){
        $error_message = "Password must have at least 6 characters.";
    } else if($password !== $confirm_password){
        $error_message = "Passwords do not match.";
    } else{
        // Prepare SQL statement
        $sql = "INSERT INTO users (`user_name`, `email`, `password`) VALUES ('$username', '$email', '$password')";
        if ($conn->query($sql) == TRUE) {
          echo "New record created successfully";
          header('Location:login.php');
      } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
      }
    
    }
    
    // Close connection
    $mysqli->close();
}
?>


<!DOCTYPE html>
<html>
<head>
	<title>Registration Page</title>
	<link rel="stylesheet" type="text/css" href="style.css">
  
</head>
<style>
  body {
	background-color: #f1f1f1;
}

.container {
	background-color: #fff;
	padding: 20px;
	margin: 50px auto;
	max-width: 500px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
	text-align: center;
	margin-bottom: 20px;
}

.form-group {
	margin-bottom: 20px;
}

label {
	display: block;
	margin-bottom: 5px;
	font-weight: bold;
}

.form-control {
	display: block;
	width: 100%;
	padding: 10px;
	font-size: 16px;
	border-radius: 5px;
	border: 1px solid #ccc;
}

.btn-primary {
	display: block;
	width: 100%;
	padding: 10px;
	font-size: 16px;
	border-radius: 5px;
	background-color: #007bff;
	border: none;
}

.btn-primary:hover {
	background-color: #0069d9;
	cursor: pointer;
}

</style>
<body>
	<div class="container">
		<h2>Registration Form</h2>
		<form action="register.php" method="post">
			<div class="form-group">
				<label for="username">Username:</label>
				<input type="text" class="form-control" id="username" placeholder="Enter username" name="username" required>
			</div>
			<div class="form-group">
				<label for="email">Email:</label>
				<input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required>
			</div>
			<div class="form-group">
				<label for="password">Password:</label>
				<input type="password" class="form-control" id="password" placeholder="Enter password" name="password" required>
			</div>
			<div class="form-group">
				<label for="confirm-password">Confirm Password:</label>
				<input type="password" class="form-control" id="confirm-password" placeholder="Confirm password" name="confirm_password" required>
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
		<p>Already have an account? <a href="login.php">Login here</a></p>
	</div>
</body>
</html>

