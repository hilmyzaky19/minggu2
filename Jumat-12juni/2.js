let dompet = {
    pemilik: "Hilmy Zaky",
    saldo: 20000,

    topUp(jumlah) {
        this.saldo += jumlah;
        console.log("Top up berhasil");
    },
    bayar(jumlah) {
        if (jumlah > this.saldo) {
            console.log("Transaksi gagal, saldo nggak cukup");
            return;
        }
        this.saldo -= jumlah;
        console.log("Pembayaran berhasil");
    },
    cekSaldo() {
        console.log(
            "Saldo rekening atas nama",
            this.pemilik + ": Rp",
            this.saldo
        );
    }
};

dompet.cekSaldo();
dompet.topUp(30000);
dompet.cekSaldo();
dompet.bayar(10000);
dompet.cekSaldo();