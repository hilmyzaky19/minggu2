
let bank = {
    nasabah: [],

    tambahNasabah(nama, saldo) {
        this.nasabah.push({
            nama: nama,
            saldo: saldo
        });

        console.log("Nasabah", nama, "berhasil ditambahkan");
    },

    cariNasabah(nama) {
        for (let data of this.nasabah) {
            if (data.nama === nama) {
                return data;
            }
        }

        return null;
    },

    transfer(pengirim, penerima, jumlah) {
        let dataPengirim = this.cariNasabah(pengirim);
        let dataPenerima = this.cariNasabah(penerima);

        if (!dataPengirim || !dataPenerima) {
            console.log("Nasabah tidak ditemukan");
            return;
        }

        if (dataPengirim.saldo < jumlah) {
            console.log("Saldo tidak mencukupi");
            return;
        }

        dataPengirim.saldo -= jumlah;
        dataPenerima.saldo += jumlah;

        console.log(
            "Transfer berhasil sebesar Rp",
            jumlah,
            "dari",
            pengirim,
            "ke",
            penerima
        );
    },

    tampilkanNasabah() {
        console.log("Daftar Nasabah:");

        for (let data of this.nasabah) {
            console.log(
                "Nama:",
                data.nama,
                "- Saldo: Rp",
                data.saldo
            );
        }
    }
};

// Simulasi
bank.tambahNasabah("Andi", 500000);
bank.tambahNasabah("Budi", 300000);
bank.tambahNasabah("Citra", 700000);

bank.transfer("Andi", "Budi", 100000);

bank.tampilkanNasabah();