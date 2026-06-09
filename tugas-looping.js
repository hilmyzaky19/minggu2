// Soal 1 - Mesin Tiket Parkir//

let lamaParkir = 7;
let totalBiaya;

if (lamaParkir <= 2) {
  totalBiaya = lamaParkir * 3000;
} else {totalBiaya = (2 * 3000) + ((lamaParkir - 2) * 2000);}
if (totalBiaya > 25000) {totalBiaya = 25000;}

console.log("Total biaya: Rp" + totalBiaya);
 
// Soal 2 - Tebak Pola
for (let i =1; i <= 5 ; i++){
  console.log(i);
}

// Soal 3 - ATM Mini
let saldo = 25000
while (saldo > 0){
    console.log("saldo saat ini: rp",saldo);
saldo -= 3000;
}
console.log("saldo habis.");

// Soal 4 - FizzBuzz Modifikasi
for (let angka = 1; angka <= 50; angka++) {
  if (angka % 3 === 0 && angka % 5 === 0) {

    console.log("FizzBuzz");
  } else if (angka % 3 === 0) {
    console.log("Fizz");
  } else if (angka % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(angka);
  }
}

// Soal 5 - Password Validator
let password = "Hilmy123";

let adaAngka = false;
let adaHuruf = false;

for (let i = 0; i < password.length; i++) {
  let karakter = password[i];

  if (karakter >= "0" && karakter <= "9") {
    adaAngka = true;
  } else {
    adaHuruf = true;
  }
}
if (password.length >= 8 && adaAngka && adaHuruf) {
  console.log("Password Valid");
} else {
  console.log("Password Tidak Valid");
}
// Soal 6 - Tebak Angka Tanpa Input
let angkarahasia =27;
let percobaan =0;
for (let i = 1 ; ;i++){
    percobaan++;
    if (i=== angkarahasia){
        console.log("angka ditemukan",i);
        console.log("jumlah percobaan:",percobaan);
        break;
    }
}
// Soal 7 - Kasir Diskon
let belanja = [80000, 120000, 275000, 600000];

for (let i = 0; i < belanja.length; i++) {
  if (belanja[i] >= 500000) {
    console.log("Diskon: " + belanja[i] * 0.20);
    console.log("Total Bayar: " + (belanja[i] - belanja[i] * 0.20));
  } else if (belanja[i] >= 250000) {
    console.log("Diskon: " + belanja[i] * 0.10);
    console.log("Total Bayar: " + (belanja[i] - belanja[i] * 0.10));
  } else if (belanja[i] >= 100000) {
    console.log("Diskon: " + belanja[i] * 0.05);
    console.log("Total Bayar: " + (belanja[i] - belanja[i] * 0.05));
  } else {
    console.log("Diskon: 0");
    console.log("Total Bayar: " + belanja[i]);
  }
}

// Soal 8 - Analisis Nilai Siswa
let nilai = [90, 75, 60, 85, 40, 100, 70];

let jumlah = 0;
let tertinggi = nilai[0];
let terendah = nilai[0];
let lulus = 0;
let tidakLulus = 0;

for (let i = 0; i < nilai.length; i++) {
  jumlah += nilai[i];

  if (nilai[i] > tertinggi) {
    tertinggi = nilai[i];
  }

  if (nilai[i] < terendah) {
    terendah = nilai[i];
  }

  if (nilai[i] >= 75) {
    lulus++;
  } else {
    tidakLulus++;
  }
}

console.log("Jumlah siswa: " + nilai.length);
console.log("Nilai tertinggi: " + tertinggi);
console.log("Nilai terendah: " + terendah);
console.log("Rata-rata nilai: " + jumlah / nilai.length);
console.log("Banyak siswa lulus: " + lulus);
console.log("Banyak siswa tidak lulus: " + tidakLulus);

// Soal 9 - Puzzle Pola

for (let i = 3; i >= 1; i--) {
  console.log("*".repeat(i));
}

for (let i = 2; i >= 1; i--) {
  console.log("*".repeat(i));
}
// Soal 10 - Tantangan Logika
let jumlah = 0;

for (let i = 1; i <= 100; i++) {
  if ((i % 2 === 0 && i % 4 !== 0) || i % 7 === 0) {
    console.log(i);
    jumlah++;
  }
}

console.log("Jumlah bilangan spesial: " + jumlah);