<?php
include_once("connection.php");
$query =mysqli_query($mysqli, "SELECT * FROM anggota");
if(mysqli_num_rows($query) > 0 ){
    $response = array();
    $response["row_count"] = mysqli_num_rows($query);
    $response["data"] = array();
    while($x = mysqli_fetch_array($query)){
        // relative----->
        $h['id_anggota'] = $x["id_anggota"];
        $h['nama'] = $x["nama"];
        $h['jenis_kelamin'] = $x["jenis_kelamin"];
        $h['tanggal'] = $x["tanggal"];
        $h['bulan'] = $x["bulan"];
        $h['tahun'] = $x["tahun"];
        // <-----relative
        array_push($response["data"], $h);
    }
    echo json_encode($response);
}else {
    $response["message"]="tidak ada data";
    echo json_encode($response);
}
?>