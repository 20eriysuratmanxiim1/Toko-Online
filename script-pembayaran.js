var namaBarang;
var hargaBarang;
var diskon;
var totalHarga;

function hitungjavascript() {
    namaBarang = document.getElementById("ipt_namaBarang").value;
    hargaBarang = parseFloat(document.getElementById("ipt_hargaBarang").value);
    diskon = hargaBarang
    if (hargaBarang = 100000) {
        diskon = 5;
        namaBarang = "Javascript";
    }
    hargaDiskon = (hargaBarang * diskon / 100);
    totalHarga = (hargaBarang) - (hargaBarang * diskon / 100);
    document.getElementById('opt_namaBarang').value = namaBarang;
    document.getElementById('opt_hargaBarang').value = hargaBarang;
    document.getElementById('opt_hargaDiskon').value = hargaBarang;
    document.getElementById('opt_diskon').value = diskon + "%";
    document.getElementById('opt_totalHarga').value = totalHarga;
}
function hitungvuejs() {
    namaBarang = document.getElementById("ipt_namaBarang").value;
    hargaBarang = parseFloat(document.getElementById("ipt_hargaBarang").value);
    diskon = hargaBarang
    if (hargaBarang = 150000) {
        diskon = 10;
        namaBarang = "Vue.js";
    }
    hargaDiskon = (hargaBarang * diskon / 100);
    totalHarga = (hargaBarang) - (hargaBarang * diskon / 100);
    document.getElementById('opt_namaBarang').value = namaBarang;
    document.getElementById('opt_hargaBarang').value = hargaBarang;
    document.getElementById('opt_hargaDiskon').value = hargaBarang;
    document.getElementById('opt_diskon').value = diskon + "%";
    document.getElementById('opt_totalHarga').value = totalHarga;
}
function hitungnodejs() {
    namaBarang = document.getElementById("ipt_namaBarang").value;
    hargaBarang = parseFloat(document.getElementById("ipt_hargaBarang").value);
    diskon = hargaBarang
    if (hargaBarang = 200000) {
        diskon = 15;
        namaBarang = "Node.js";
    }
    hargaDiskon = (hargaBarang * diskon / 100);
    totalHarga = (hargaBarang) - (hargaBarang * diskon / 100);
    document.getElementById('opt_namaBarang').value = namaBarang;
    document.getElementById('opt_hargaBarang').value = hargaBarang;
    document.getElementById('opt_hargaDiskon').value = hargaDiskon;
    document.getElementById('opt_diskon').value = diskon + "%";
    document.getElementById('opt_totalHarga').value = totalHarga;
}

function reset() {
    document.getElementById('ipt_namaBarang').value = '';
    document.getElementById('ipt_hargaBarang').value = '';
    document.getElementById('opt_namaBarang').value = '';
    document.getElementById('opt_hargaBarang').value = '';
    document.getElementById('opt_diskon').value = '';
    document.getElementById('opt_hargaDiskon').value = '';
    document.getElementById('opt_totalHarga').value = '';
}