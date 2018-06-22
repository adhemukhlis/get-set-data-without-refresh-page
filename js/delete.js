// function to delete data from server with param row index
function deletee(i) {
    // relative----->
    // find id from row index
	var id = data_anggota[i].id_anggota;
	var data = "id=" + id;
    // <-----relative

    return $.ajax({
        type: "post",
        url: "php/delete.php",
        data: data,
        cache: !1,
        // prop will call add_succses function when post success
        success: delete_success,
        // prop will call add_error function when post failed
        error: delete_error
    }), !1
}

// function who will called when post proses is success
function delete_success(){
    // your code when post success
    console.log("deleted!");
    get_table();
}

// function who will called when post proses is failed
function delete_error(){
    // your code when post failed
    console.log("error!");
}