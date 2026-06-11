// ## Soal 4 – Nilai Kelulusan

// Gunakan data nilai berikut:

// - 90, 65, 75, 40, 88, 70, 55

// Buat function untuk menghasilkan:

// 1. Array siswa yang lulus (nilai ≥ 75).
// 2. Array siswa yang tidak lulus.
// 3. Jumlah masing-masing.

// ---

function nilaisiswa() {
    let nilai = [90, 65, 75, 40, 88, 70, 55];

    let lulus = [];
    let tidakLulus = [];

    for (let i = 0; i < nilai.length; i++) {
        if (nilai[i] >= 75) {
            lulus.push(nilai[i]);
        } else {
            tidakLulus.push(nilai[i]);
        }
    }

    console.log("Lulus:");
    console.log(lulus);

    console.log("Tidak lulus:");
    console.log(tidakLulus);

    console.log("Jumlah lulus:", lulus.length);
    console.log("Jumlah tidak lulus:", tidakLulus.length);
}

nilaisiswa();