<?php
$con = mysqli_connect("localhost", "root", "password", "formdata");
if(!$con)
{
    die('Connection failed');
}

if(isset($_POST['submit']))
{
    $name = $_POST['name'];
    $cardnumber = $_POST['cardnumber'];
    $expdate = $_POST['exp-date'];
    $cvv = $_POST['cvv'];

    $sql_query = "INSERT INTO userdetails (name, cardnumber, expdate, cvv) values (?, ?, ?, ?)";

    $stmt = mysqli_prepare($con, $sql_query);

    if($stmt)
    {
        mysqli_stmt_bind_param($stmt, "ssss", $name, $cardnumber, $expdate, $cvv);

        
    }
    else
    {
        console.log( "error");
    }
    mysqli_close($con);
}
?>