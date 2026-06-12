let barang = {
    namaBarang: "iphone 14 promax",
    stok: 10,
    harga: 1200000,

    tambahStok(jumlah) {
        this.stok += jumlah;
        console.log("Stok bertambah menjadi", this.stok);
    },

    kurangiStok(jumlah) {
        if (jumlah > this.stok) {
            console.log("Stok tidak mencukupi");
            return;
        }
        this.stok -= jumlah;
        console.log("Stok berkurang menjadi", this.stok);
    },
    totalNilaiBarang() {
        console.log(
            "Total nilai barang: Rp",
            this.stok * this.harga
        );
    }
};

barang.tambahStok(5);
barang.kurangiStok(3);
barang.totalNilaiBarang();