

let lampu = {
    status: "mati",

    nyalakan() {
        this.status = "menyala";
        console.log("Lampu berhasil dinyalakan");
    },

    matikan() {
        this.status = "mati";
        console.log("Lampu berhasil dimatikan");
    },

    toggle() {
        if (this.status === "menyala") {
            this.status = "mati";
        } else {
            this.status = "menyala";
        }

        console.log("Status lampu berubah menjadi", this.status);
    },

    cekStatus() {
        console.log("Status lampu saat ini:", this.status);
    }
};

lampu.cekStatus();
lampu.nyalakan();
lampu.cekStatus();
lampu.toggle();
lampu.cekStatus();
lampu.toggle();
lampu.cekStatus();