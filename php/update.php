<?php
include_once("connection.php");	
$id_anggota = $_POST['id'];
$nama = $_POST['nm'];
$jenis_kelamin = $_POST['jk'];
$tgl = $_POST['tgl'];
$bln = $_POST['bln'];
$thn = $_POST['thn'];
$result = mysqli_query($mysqli, "UPDATE anggota SET nama='$nama', jenis_kelamin='$jenis_kelamin' , tanggal='$tgl' , bulan='$bln', tahun='$thn' WHERE id_anggota='$id_anggota'");	
?>