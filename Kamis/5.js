// ## Soal 5 – Diskon Toko

// Gunakan data harga berikut:

// - 10000, 25000, 50000, 120000

// Buat function yang:

// 1. Menghasilkan array baru berisi harga setelah diskon 10%.
// 2. Menampilkan harga sebelum diskon.
// 3. Menampilkan harga setelah diskon.

// ---
function diskonToko() {
    let harga = [10000, 25000, 50000, 120000];
    let hargaSetelahDiskon = [];

    for (let i = 0; i < harga.length; i++) {
        let hasilDiskon = harga[i] - (harga[i] * 10 / 100);
        hargaSetelahDiskon.push(hasilDiskon);
    }

    console.log("Harga sebelum diskon:");
    console.log(harga);

    console.log("Harga setelah diskon:");
    console.log(hargaSetelahDiskon);
}

diskonToko();
