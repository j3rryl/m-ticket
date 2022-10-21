<?php
$localhost="localhost";
$username="root";
$password="root";
$db_name="m_tickets";

//Connect
$conn=mysqli_connect($localhost, $username, $password, $db_name);
if (mysqli_connect_errno()) {
    die("Database Connection Failed: " . mysqli_connect_error());
} else {
    // echo "Database Connection Successful";
    return $conn;
}
?>