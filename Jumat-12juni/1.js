// soal nomor 1

let mahasiswa = {
  nama: "Hilmy Zaky",
  nim: "081340",
  jurusan: "Informatika",
  semester: 2,

  perkenalan: function () {
    console.log(
      "Halo, nama saya " + this.nama +
      ", NIM saya " + this.nim +
      ", saya dari pondok IT " + this.jurusan +
      " saya sekarang semester " + this.semester + "."
    );
  }
};

mahasiswa.perkenalan();