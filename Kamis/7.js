// ## Soal 7 – Sistem Perpustakaan Mini

// Gunakan daftar buku berikut:

// - Laskar Pelangi
// - Bumi
// - Dilan
// - Ayat-Ayat Cinta

// Buat function untuk:

// 1. Menambahkan buku baru.
// 2. Menghapus buku berdasarkan nama.
// 3. Mengecek apakah suatu buku tersedia.
// 4. Menampilkan seluruh daftar buku.

// ---
function perpustakaanMini() {
    let buku = ["Laskar Pelangi", "Bumi", "Dilan", "Ayat-Ayat Cinta"];

    console.log("Daftar buku awal:");
    console.log(buku);

    // 1. Menambahkan buku baru
    buku.push("Negeri 5 Menara");

    // 2. Menghapus buku berdasarkan nama
    let index = buku.indexOf("Dilan");
    if (index !== -1) {
        buku.splice(index, 1);
    }

    // 3. Mengecek apakah buku tersedia
    let cariBuku = "Bumi";

    if (buku.indexOf(cariBuku) !== -1) {
        console.log(cariBuku + " tersedia");
    } else {
        console.log(cariBuku + " tidak tersedia");
    }

    // 4. Menampilkan seluruh daftar buku
    console.log("Daftar buku terbaru:");
    console.log(buku);
}

perpustakaanMini();