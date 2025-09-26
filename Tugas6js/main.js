import {index, store, destroy } from "./controller.js";

const main = () => {
    // ini untuk tombol menambah 5 data //
    document.getElementById("btnAdd").addEventListener("click", () => {
        store({ nama: 'Farida rabbani', umur: 21, alamat: 'Jl. Citayem 1', email: 'farida@gmail.com' });
        store({ nama: 'Rifqi Nur saputra', umur: 14, alamat: 'Jl. Kemerdekaan 17', email: 'rifqi@gmail.com' });
        store({ nama: 'Rika Herlina', umur: 19, alamat: 'Jl. Hegarmanah', email: 'rika@gmail.com' });
        store({ nama: 'Syafa Kahirunizza azahra', umur: 24, alamat: 'Jl. Pasir', email: 'syafa@gmail.com' });
        store({ nama: 'Riska Amelia', umur: 22, alamat: 'Jl. Jeruk', email: 'riska@gmail.com' });
    });

    // tombol untuk hapus data //
    document.getElementById("btnRemove").addEventListener("click", () => {
        destroy();
    });

    // tampilan //
    index ();
};

main ();