// tmp variable array of object
var objdata = [];

// passing array of object to set function in script.js
function return_data(){
    set_anggota(objdata);
}

// important function, parsing json from server from x-json-encode.php file
function get_table() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            var row = myObj.row_count;
            objdata = [];
            for (var i = 0; i < row; i++) {
                var tmp = {
                    // relative----->
                    id_anggota: myObj.data[i].id_anggota,
                    nama: myObj.data[i].nama,
                    jenis_kelamin: myObj.data[i].jenis_kelamin,
                    birthday: {
                        tanggal: myObj.data[i].tanggal,
                        bulan: myObj.data[i].bulan,
                        tahun: myObj.data[i].tahun
                    }
                    // <-----relative
                };
                objdata.push(tmp);
            }
            return_data();
        }
    };
    xmlhttp.open("GET", "php/x-json-encode.php", true);
    xmlhttp.send();
}

