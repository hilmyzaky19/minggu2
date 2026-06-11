// ## Soal 8 – Analisis Nama

// Gunakan data berikut:

// - Andi
// - Budi
// - Citra
// - Dewi
// - Asep
// - Aulia

// Buat function untuk:

// 1. Menampilkan nama yang diawali huruf "A".
// 2. Menghitung jumlah nama yang diawali huruf "A".
// 3. Menampilkan nama dengan jumlah huruf lebih dari 4 karakter.

function analisisNama() {
    let nama = ["Andi", "Budi", "Citra", "Dewi", "Asep", "Aulia"];

    let namaA = [];
    let lebihDari4 = [];

    for (let i = 0; i < nama.length; i++) {

        // Nama diawali huruf A
        if (nama[i][0] === "A") {
            namaA.push(nama[i]);
        }

        // Nama lebih dari 4 karakter
        if (nama[i].length > 4) {
            lebihDari4.push(nama[i]);
        }
    }

    console.log("Nama yang diawali huruf A:");
    console.log(namaA);

    console.log("Jumlah nama yang diawali huruf A:");
    console.log(namaA.length);

    console.log("Nama dengan lebih dari 4 karakter:");
    console.log(lebihDari4);
}

analisisNama();