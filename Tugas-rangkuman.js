// ======================================
// RANGKUMAN BAB 8: ARRAY & ARRAY METHOD
// ======================================

// Array adalah tipe data yang digunakan untuk
// menyimpan banyak nilai dalam satu variabel.

let siswa = ["Budi", "Asep", "Joko"];

// --------------------------------------
// 1. Mengakses Elemen Array
// --------------------------------------

// Indeks dimulai dari 0

console.log(siswa[0]); // Budi
console.log(siswa[1]); // Asep
console.log(siswa[2]); // Joko

// Mengubah nilai

siswa[1] = "Dewi";
console.log(siswa);

// --------------------------------------
// 2. Length
// --------------------------------------

// Mengetahui jumlah elemen array

console.log(siswa.length);

// --------------------------------------
// 3. Push
// --------------------------------------

// Menambah elemen di akhir

siswa.push("Rina");
console.log(siswa);

// --------------------------------------
// 4. Unshift
// --------------------------------------

// Menambah elemen di awal

siswa.unshift("Andi");
console.log(siswa);

// --------------------------------------
// 5. Pop
// --------------------------------------

// Menghapus elemen terakhir

siswa.pop();
console.log(siswa);

// --------------------------------------
// 6. Shift
// --------------------------------------

// Menghapus elemen pertama

siswa.shift();
console.log(siswa);

// --------------------------------------
// 7. IndexOf
// --------------------------------------

// Mencari indeks elemen

console.log(siswa.indexOf("Joko"));

// --------------------------------------
// 8. Includes
// --------------------------------------

// Mengecek apakah elemen ada

console.log(siswa.includes("Dewi"));

// --------------------------------------
// 9. Splice
// --------------------------------------

// Menghapus atau menambah elemen

let kota = ["Jakarta", "Bandung", "Surabaya"];

kota.splice(1, 1);

console.log(kota);

// --------------------------------------
// 10. Slice
// --------------------------------------

// Mengambil sebagian array

let angka = [10, 20, 30, 40, 50];

console.log(angka.slice(1, 4));

// --------------------------------------
// Perulangan Array
// --------------------------------------

let buah = ["Apel", "Jeruk", "Mangga"];

for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}

// ======================================
// KESIMPULAN
// ======================================

// length    = jumlah elemen
// push()    = tambah di akhir
// unshift() = tambah di awal
// pop()     = hapus di akhir
// shift()   = hapus di awal
// indexOf() = mencari indeks
// includes()= mengecek data
// splice()  = tambah/hapus/ganti data
// slice()   = mengambil sebagian array


// ======================================
// RANGKUMAN BAB 9: JAVASCRIPT FUNCTION
// ======================================

// Function adalah blok kode yang dapat digunakan
// kembali untuk menghindari penulisan kode berulang
// (prinsip DRY - Don't Repeat Yourself).

// --------------------------------------
// 1. Function Declaration
// --------------------------------------

// Membuat fungsi dengan kata kunci function

function salam() {
  console.log("Halo!");
}

salam();

// --------------------------------------
// 2. Parameter dan Argumen
// --------------------------------------

// Parameter adalah variabel penerima data
// Argumen adalah nilai yang dikirim saat fungsi dipanggil

function sapa(nama) {
  console.log("Halo " + nama);
}

sapa("Budi");

// --------------------------------------
// 3. Return
// --------------------------------------

// Return digunakan untuk mengembalikan nilai
// dari dalam fungsi

function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);

console.log(hasil);

// Setelah return dijalankan,
// fungsi langsung berhenti

// --------------------------------------
// 4. Parameter Default
// --------------------------------------

function hitungDiskon(harga, diskon = 10) {
  return harga - (harga * diskon) / 100;
}

console.log(hitungDiskon(100000));
console.log(hitungDiskon(100000, 20));

// --------------------------------------
// 5. Function Expression
// --------------------------------------

// Fungsi disimpan ke dalam variabel

const luasPersegiPanjang = function (panjang, lebar) {
  return panjang * lebar;
};

console.log(luasPersegiPanjang(5, 3));

// --------------------------------------
// 6. Arrow Function
// --------------------------------------

// Penulisan fungsi yang lebih ringkas

const kali = (a, b) => {
  return a * b;
};

console.log(kali(4, 5));

// Versi singkat

const bagi = (a, b) => a / b;

console.log(bagi(10, 2));

// --------------------------------------
// Contoh Penggunaan Function
// --------------------------------------

function hitungLuasPersegi(sisi) {
  return sisi * sisi;
}

console.log(hitungLuasPersegi(4));

// --------------------------------------
// KESIMPULAN
// --------------------------------------

// Function Declaration = function nama() {}
// Function Expression = const nama = function() {}
// Arrow Function = const nama = () => {}
// Parameter = variabel penerima data
// Argumen = nilai yang dikirim ke fungsi
// return = mengembalikan nilai dari fungsi
// Default Parameter = nilai bawaan parameter
//
// Fungsi membantu membuat kode lebih rapi,
// mudah dibaca, dan dapat digunakan kembali.