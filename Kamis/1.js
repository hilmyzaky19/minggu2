// ## Soal 1 – Pengelola Daftar Belanja

// Data awal:

// - Beras
// - Telur
// - Gula

// Lakukan operasi berikut:

// 1. Tambahkan "Minyak".
// 2. Tambahkan "Garam" di awal array.
// 3. Hapus item terakhir.
// 4. Tampilkan daftar belanja terbaru.
// 5. Tampilkan jumlah item yang tersisa.

// ---

let daftarBelanja = ["Beras", "Telur", "gula" ]
daftarBelanja.push("minyak"); 
daftarBelanja .unshift ("garam"); 
daftarBelanja.pop ("gula");
console.log ("daftar belanja",daftarBelanja);
console.log ("jumlah item", daftarBelanja.length);