// variable data place from server 
var data_anggota;

// refresh function
function refresh(){
	// call important function from x-json-parse.js
	get_table();	
}

// passed data from server to variable 'data_anggota' 
function set_anggota(data){
	data_anggota = data;
	printdata();
}

// print data to html
function printdata(){
	var str;
	for (var i = 0; i < data_anggota.length; i++) {
		// can edit
		var tmp = '<tr><td>'+data_anggota[i].id_anggota+'</td><td>'+data_anggota[i].nama+'</td><td>'+data_anggota[i].jenis_kelamin+'</td><td>'+data_anggota[i].birthday.tanggal+' '+data_anggota[i].birthday.bulan+' '+data_anggota[i].birthday.tahun+'</td><td><button onclick="fill('+i+')">edit</button><button onclick="deletee('+i+')">delete</button></td></tr>';
		// can edit
		str += tmp;
	}
	$("#tbl_anggota").html(str);
}

//filling the field when called
function fill(row){
	// relative----->
    $("#id_anggota").val(data_anggota[row].id_anggota),
    $("#nama").val(data_anggota[row].nama),
    $("#jenis_kelamin").val(data_anggota[row].jenis_kelamin),
    $("#tgl").val(data_anggota[row].birthday.tanggal);
    $("#bln").val(data_anggota[row].birthday.bulan);
    $("#thn").val(data_anggota[row].birthday.tahun);
    // <-----relative
}

// auto sync every 1 sec, call the refresh function 
refresh();
setInterval(refresh, 1000);