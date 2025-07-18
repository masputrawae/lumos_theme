---
id: "20250701114743"
title: Array Di JavaScript
tags:
  - javascript
  - array
  - data_structure
  - snipp
  - reference
created: 2025-07-01T11:47:43+07:00
updated: 2025-07-10T17:43:20+07:00
---

Dalam bahasa Indonesia, _array_ bisa diartikan sebagai **susunan**. Bayangkan seperti sebuah rak yang bisa menyimpan beberapa benda secara teratur.

Contoh array di JavaScript:

```javascript
const rakBuku = ['Resep Nasi Goreng', 'Filosofi', 'Belajar Matematika', 'Kamus Bahasa Inggris']
```

Variabel `rakBuku` di sini seperti rak buku sungguhan, yang berisi beberapa buku. Setiap buku memiliki indeks (nomor urut), dan dimulai dari 0 _yang artinya urutan 0 dimulai dari `Resep Nasi Goreng`_

## Menampilkan isi array:

Kita bisa menggunakan forEach, yaitu method array untuk menjalankan fungsi pada setiap elemen.

```javascript
rakBuku.forEach((buku) => {
	console.log(buku)
})
// Output:
// Resep Nasi Goreng
// Filosofi
// Belajar Matematika
// Kamus Bahasa Inggris
```

Jika hanya ingin menampilkan satu buku saja berdasarkan indeks:

```javascript
console.log(rakBuku[0])
// output: Resep Nasi Goreng

console.log(rakBuku[1])
// output: Filosofi
```

## Kesimpulan:

Array adalah struktur data seperti rak yang menyimpan banyak data (dalam urutan), bisa diakses menggunakan nomor urut (indeks), dan sangat sering digunakan dalam JavaScript.

## Terkait

- [[Looping Di JavaScript]]
- [[forEach Di JavaScript]]
- [[Object Di JavaScript]]
- [[20250630113534_fungsi_map_di_javascript]]
- [[20250629175251_fungsi_filter_di_javascrip]]
- [[Fungsi reduce Di JavaScript]]
- [[20250701122631_fungsi_slice_di_javascript]]
