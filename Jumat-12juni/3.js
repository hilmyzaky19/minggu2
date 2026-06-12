// Soal 3 - Analisis Iterable

// 1. Array
let angka = [1, 2, 3, 4];

console.log("Array termasuk iterable:");
for (let nilai of angka) {
    console.log(nilai);
}

// 2. String
let nama = "Hilmy";

console.log("String termasuk iterable:");
for (let huruf of nama) {
    console.log(huruf);
}

// 3. Object Biasa
let siswa = {
    nama: "Hilmy",
    umur: 17
};

console.log("Object biasa tidak termasuk iterable");