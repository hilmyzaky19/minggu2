
// ## Soal 9 – Ranking Nilai

// Gunakan data berikut:

// - 78, 95, 62, 88, 70, 100

// Buat function untuk:

// 1. Mengurutkan nilai dari tertinggi ke terendah.
// 2. Menampilkan 3 nilai tertinggi.
// 3. Menampilkan 2 nilai terendah.
// 4. Pastikan data asli tidak berubah.

function rankingNilai() {
    let nilai = [78, 95, 62, 88, 70, 100];

    // Salin array agar data asli tidak berubah
    let urutNilai = nilai.slice();

    // Urutkan dari tertinggi ke terendah
    urutNilai.sort(function(a, b) {
        return b - a;
    });

    console.log("Data asli:");
    console.log(nilai);

    console.log("Nilai setelah diurutkan:");
    console.log(urutNilai);

    console.log("3 nilai tertinggi:");
    console.log(urutNilai.slice(0, 3));

    console.log("2 nilai terendah:");
    console.log(urutNilai.slice(-2));
}

rankingNilai();