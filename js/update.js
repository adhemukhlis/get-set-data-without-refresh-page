// function to update data to server
function update() {
    // relative----->
    var id_anggota = $("#id_anggota").val(),
        nama = $("#nama").val(),
        jenis_kelamin = $("#jenis_kelamin").val(),
        tgl = $("#tgl").val();
        bln = $("#bln").val();
        thn = $("#thn").val();
    var data = "id=" + id_anggota + "&nm=" + nama + "&jk=" + jenis_kelamin + "&tgl=" + tgl + "&bln=" + bln + "&thn=" + thn ;
    // <-----relative
    return $.ajax({
        type: "post",
        url: "php/update.php",
        data: data,
        cache: !1,
        // prop will call add_succses function when post success
        success: update_success,
        // prop will call add_error function when post failed
        error: update_error
    }), !1
}

// function who will called when post proses is success
function update_success(){
    // your code when post success
    console.log("saved!");
    get_table();
}

// function who will called when post proses is failed
function update_error(){
    // your code when post failed
    console.log("error!");
}