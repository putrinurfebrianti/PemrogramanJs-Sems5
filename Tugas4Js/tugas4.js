// tugas 4 sistem manajemen kendaraan //

// clas kendaraan vehicle //
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  getInfo() {
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
  constructor(brand, model, year, doors) {
    super(brand, model, year);
    this.doors = doors;
  }
}

// class pelanggan //
class Pelanggan {
  constructor(nama, nomorTelepon) {
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

// sistem manajemen //
class SistemTransportasi {
  constructor() {
    this.pelangganList = [];
    this.transaksiList = []; 
  }

  tambahPelanggan(pelanggan) {
    this.pelangganList.push(pelanggan);
  }

  // metode catat transaksi //
  catatTransaksi(pelanggan, kendaraan) {
    // Set kendaraan pada pelanggan
    pelanggan.sewaKendaraan(kendaraan);

    // simpan daftar transaksi //
    const transaksi = {
      nama: pelanggan.nama,
      nomorTelepon: pelanggan.nomorTelepon,
      kendaraan: kendaraan.getInfo(),
      tanggal: new Date().toLocaleString()
    };
    this.transaksiList.push(transaksi);
  }

  getPenyewa() {
    return this.pelangganList.map((p, i) => `${i + 1}. ${p.getInfo()}`);
  }

  getTransaksi() {
    return this.transaksiList.map(
      (t, i) => `${i + 1}. ${t.nama} menyewa ${t.kendaraan} pada ${t.tanggal}`
    );
  }
}


const sistem = new SistemTransportasi();

// Buat kendaraan //
const mobilAvanza = new Car("Toyota", "Avanza", 2024, 4);
const sepedaGunung = new Bicycle("Polygon", "Xtrada", 2023, "Gunung");

// Buat pelanggan //
const pelanggan1 = new Pelanggan("Putri", "08985478379589");
const pelanggan2 = new Pelanggan("Aditya", "089372367362");

// catat tarnsaksi //
sistem.catatTransaksi(pelanggan1, mobilAvanza);
sistem.catatTransaksi(pelanggan2, sepedaGunung);

// daftar penyewa //
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

// hasilnya // 
console.log("Daftar Pelanggan yang Menyewa Kendaraan:");
sistem.getPenyewa().forEach(baris => console.log(baris));

console.log("\nRiwayat Transaksi:");
sistem.getTransaksi().forEach(baris => console.log(baris));
