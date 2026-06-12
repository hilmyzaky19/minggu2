// Soal 8 - Sistem Game Karakter

let karakter = {
    nama: "Hilmy",
    hp: 100,
    attack: 20,

    serang() {
        console.log(this.nama, "menyerang dengan damage", this.attack);
    },

    kenaDamage(jumlah) {
        this.hp -= jumlah;
        console.log(this.nama, "menerima damage", jumlah);
    },

    heal(jumlah) {
        this.hp += jumlah;
        console.log(this.nama, "memulihkan HP", jumlah);
    },

    status() {
        console.log("Nama Karakter:", this.nama);
        console.log("HP:", this.hp);
        console.log("Attack:", this.attack);
    }
};

// Simulasi
karakter.serang();
karakter.kenaDamage(30);
karakter.heal(15);
karakter.status();