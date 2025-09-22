// Buat array produkToko yang menyimpan daftar produk //
let produkToko = [
  { id: 1, nama: "Laptop",   harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse",    harga: 200000,  stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000,  stok: 7 }
];

//  Buat fungsi tambahProduk(nama, harga, stok) untuk menambahkan produk baru ke dalam array. //
function tambahProduk(nama, harga, stok) {
  const idBaru = produkToko.length > 0
    ? Math.max(...produkToko.map(p => p.id)) + 1
    : 1;

  const produkBaru = { id: idBaru, nama, harga, stok };
  produkToko.push(produkBaru);
  return `Produk "${nama}" yeay berhasil ditambahkan.`;
}

// Buat fungsi hapusProduk(id) untuk menghapus produk berdasarkan id. //
function hapusProduk(id) {
  const index = produkToko.findIndex(p => p.id === id);
  if (index !== -1) {
    const terhapus = produkToko.splice(index, 1);
    return `Produk "${terhapus[0].nama}" sudah berhasil dihapus.`;
  } else {
    return `Produk dengan id ${id} tidak ada.`;
  }
}

// Buat fungsi tampilkanProduk() untuk menampilkan daftar produk //
function tampilkanProduk() {
  if (produkToko.length === 0) {
    return "Belum ada produk.";
  }
  let daftar = "=== Toko nya tersedia produk :  ===\n";
  daftar += produkToko.map(p =>
    `ID: ${p.id} | Nama: ${p.nama} | Harga: Rp${p.harga} | Stok: ${p.stok}`
  ).join("\n");
  return daftar;
}

let terimaKasih = [ "Terimakasih telah berbelanja di toko kami"] ; 


console.log(tampilkanProduk());                              // ini yang tampilan awal //
console.log(tambahProduk("Cassan", 800000, 8));             // ini buat nambah produk //
console.log(hapusProduk(2));                                // dan ini buat hapus produk berdasarkan id //
console.log(tampilkanProduk());                             // buat nampilin produk //
console.log(terimaKasih)