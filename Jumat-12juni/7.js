
let penjualan = {
    Januari: 100000,
    Februari: 120000,
    Maret: 90000,
    April: 150000
};


let totalPenjualan = 0;
let jumlahBulan = 0;

for (let bulan in penjualan) {
    totalPenjualan += penjualan[bulan];
    jumlahBulan++;
}

console.log("Total penjualan:", totalPenjualan);

// 2. Rata-rata penjualan
let rataRata = totalPenjualan / jumlahBulan;
console.log("Rata-rata penjualan:", rataRata);

// 3. Bulan dengan penjualan tertinggi
let penjualanTertinggi = 0;
let bulanTertinggi = "";

for (let bulan in penjualan) {
    if (penjualan[bulan] > penjualanTertinggi) {
        penjualanTertinggi = penjualan[bulan];
        bulanTertinggi = bulan;
    }
}

console.log("Penjualan tertinggi:", penjualanTertinggi);
console.log("Bulan tertinggi:", bulanTertinggi);