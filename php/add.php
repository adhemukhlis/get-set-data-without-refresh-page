<?php
include_once("connection.php");
	$id_anggota = $_POST['id'];
	$nama = $_POST['nm'];
	$jenis_kelamin = $_POST['jk'];
	$tgl = $_POST['tgl'];
	$bln = $_POST['bln'];
	$thn = $_POST['thn'];
	if ($id_anggota!=null){
		$result = mysqli_query($mysqli, "INSERT INTO anggota(id_anggota, nama, jenis_kelamin, tanggal, bulan, tahun) VALUES('$id_anggota','$nama','$jenis_kelamin', '$tgl', '$bln', '$thn')");
	}
?>