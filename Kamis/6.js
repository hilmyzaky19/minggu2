// ## Soal 6 – Statistik Nilai

// Gunakan data berikut:

// - 80, 90, 75, 100, 60

// Buat function untuk menghitung:

// 1. Total seluruh nilai.
// 2. Nilai rata-rata.
// 3. Nilai tertinggi.
// 4. Nilai terendah.

// ---
function statistikNilai() {
    let nilai = [80, 90, 75, 100, 60];

    let total = 0;
    let tertinggi = nilai[0];
    let terendah = nilai[0];

    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i];

        if (nilai[i] > tertinggi) {
            tertinggi = nilai[i];
        }

        if (nilai[i] < terendah) {
            terendah = nilai[i];
        }
    }

    let rataRata = total / nilai.length;

    console.log("Total nilai:", total);
    console.log("Rata-rata:", rataRata);
    console.log("Nilai tertinggi:", tertinggi);
    console.log("Nilai terendah:", terendah);
}
statistikNilai();