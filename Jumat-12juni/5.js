// Soal 5 - Buku Nilai

let nilaiSiswa = {
    Andi: 80,
    Budi: 90,
    Citra: 75,
    Dewi: 88
};

console.log("Daftar nama siswa:");
for (let nama in nilaiSiswa) {
    console.log(nama);
}

console.log("Daftar nilai siswa:");
for (let nama in nilaiSiswa) {
    console.log(nilaiSiswa[nama]);
}


let totalNilai = 0;
let jumlahSiswa = 0;

for (let nama in nilaiSiswa) {
    totalNilai += nilaiSiswa[nama];
    jumlahSiswa++;
}

console.log("Rata-rata nilai:", totalNilai / jumlahSiswa);

let nilaiTertinggi = 0;
let siswaTerbaik = "";

for (let nama in nilaiSiswa) {
    if (nilaiSiswa[nama] > nilaiTertinggi) {
        nilaiTertinggi = nilaiSiswa[nama];
        siswaTerbaik = nama;
    }
}

console.log("Nilai tertinggi:", nilaiTertinggi);
console.log("Dimiliki oleh:", siswaTerbaik);