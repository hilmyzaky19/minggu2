// ## Soal 2 – Mencari Nilai

// Gunakan array angka berikut:

// - 12, 5, 7, 20, 9

// Buat function untuk:

// 1. Mencari apakah angka 20 terdapat dalam array.
// 2. Menampilkan apakah angka ditemukan atau tidak.
// 3. Menampilkan posisi indeksnya.

// ---
function cariangka(){
    let angka = [12, 5, 20, 9];
    let ditemukan = false
    let indeks = -1;
}    
    for (let i = 0; i < angka.length; i++){
        if (angka(i) === 20) {
            ditemukan = true;
            indeks = i;
        }
    }
if (ditemukan){
    console.log ("angka 20 ditemukan");
       console.log("Posisi indeks: " + indeks);
}else{
    console.log ("angka 20 tidak ditemukan");

}



