<?php
include_once("connection.php");	
$id_anggota = $_POST['id'];
$result=mysqli_query($mysqli, "DELETE FROM anggota WHERE id_anggota='$id_anggota'");
?>