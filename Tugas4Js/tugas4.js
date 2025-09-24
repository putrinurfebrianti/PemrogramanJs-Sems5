// Sistem Manajemen Trnasportasi //

// ini class vehicle //

class Vehicle {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

// subclass sepeda //

class Bicycle extends Vehicle {
  constructor(brand, model, year, type) {
    super(brand, model, year);
    this.type = type; 
  }
}

// subclass mobil //

class Car extends Vehicle {
    constructor(brand, model, year,doors){
        super(brand, model, year);
        this.doors = doors;
    }
}

// class pelanggan //

class Pelanggan {
    constructor(nama, nomorTelepon){
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;

    }
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }
    getInfo() {
    const kendaraanInfo = this.kendaraanDisewa
      ? this.kendaraanDisewa.getInfo()
      : "Tidak ada kendaraan yang disewa";
    return `${this.nama} (${this.nomorTelepon}) - ${kendaraanInfo}`;
  }
}

//  class manajemen transportasi //

class SistemTransportasi {
    constructor() {
        this.pelangganList = [];
    }
    tambahPelanggan(pelanggan) {
        this.pelangganList.push(pelanggan);
    }
    getPenyewa() {
    return this.pelangganList.map((p, i) => `${i + 1}. ${p.getInfo()}`);
  }
}

// mari kita eksekusi //
const sistem = new SistemTransportasi();

// buat kendaraan mobil dan sepeda //
const mobilAvanza = new Car("Toyota", "Avanza", 2024, 4);
const sepedaGunung = new Bicycle("Polygon", "Xtrada", 2023, "Gunung");

// pelanggan dan sewa //
const pelanggan1 = new Pelanggan("Putri", "08985478379589");
pelanggan1.sewaKendaraan(mobilAvanza);

const pelanggan2 = new Pelanggan("Aditya", "089372367362");
pelanggan2.sewaKendaraan(sepedaGunung);

// masuk atau catat ke sistem //
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);


console.log("Daftar Pelanggan yang Menyewa Kendaraan:");
sistem.getPenyewa().forEach(baris => console.log(baris));


