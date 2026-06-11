// ## Soal 3 – Sensor Kata Terlarang

// Gunakan data berikut:

// - bodoh
// - rajin
// - malas
// - hebat
// - jelek

// Buat function yang:

// 1. Menghapus kata "bodoh".
// 2. Menghapus kata "jelek".
// 3. Menampilkan array sebelum dan sesudah diproses

function proseskata(){
let kata = ["bodoh", "rajin","malas","hebat","jelek"];
console.log ("sebelum di hapus:");
console.log(kata);
kata.shift();
kata.pop();
console.log ("sesudah diproses:");
console.log(kata);
}
proseskata();
