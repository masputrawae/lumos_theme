---
id: "20250624161056"
title: Membuat Slugify Sederhana Di JavaScript
tags:
  - javascript
  - slug
  - vulnerability
  - normalize
  - reference
created: 2025-06-24T16:10:56+07:00
updated: 2025-07-10T18:13:54+07:00
---

```javascript
function slugify(text) {
	return text
		.toLowerCase() // ubah jadi huruf kecil
		.trim() // hilangkan spasi di awal/akhir
		.replace(/[\s_]+/g, '-') // ganti spasi dan _ jadi -
		.replace(/[^\w\-]+/g, '') // hilangkan karakter non-alfanumerik (opsional)
		.replace(/\-\-+/g, '-') // ganti -- jadi -
}

const hasil = slugify('Ini adalah_judul Artikel!')
console.log(hasil) // "ini-adalah-judul-artikel"
```

## Penjelasan:

- `toLowerCase()` → biar slug-nya konsisten huruf kecil.
- `trim()` → bersihkan spasi di depan & belakang.
- `/[\s_]+/g` → cari semua spasi (`\s`) dan underscore (`_`) lalu ganti dengan `-`.
- `/[^\w\-]+/g` → hapus karakter aneh selain huruf, angka, `_` dan `-` (opsional).
- `/\-\-+/g` → hapus strip ganda jadi satu strip.

Kalau mau versi singkat tanpa filter karakter aneh:

```javascript
text.replace(/[\s_]+/g, '-')
```
