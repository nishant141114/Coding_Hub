<?php
error_reporting(0);
session_start();
include("config.php");
require_once "config.php";

if (isset($_POST['submit'])) {
    $username = $_POST["username"];
    $password =  $_POST["password"];

    $sql = "SELECT * FROM `users` WHERE user_name = '$username'";
    
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {

      $row = $result->fetch_assoc();
      $confirm_password = $row['password'];
      if($password == $confirm_password){
        header('Location:homePage/template.html');
      }
        // header('Location:machine.php');
    } 
    else {
      echo "No data present";
        // echo "Error: " . $sql . "<br>" . $conn->error;
    }

}

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Login Form</title>
    <style>
      /* CSS styles for the form */
      
    </style>
  </head>
  <body>
    <form  method="POST">
      <h1>Login Form</h1>
      
      <label for="username">User Name</label>
      <input type="text" id="text" name="username" required>
      
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>
      
      <button  type="submit" value="submit" name="submit">Login</button>
    </form>
    
    <div class="footer">
      <a href="#">Forgot Password</a>
      <a href="register.php">Create an Account</a>
    </div>
  </body>
</html>
