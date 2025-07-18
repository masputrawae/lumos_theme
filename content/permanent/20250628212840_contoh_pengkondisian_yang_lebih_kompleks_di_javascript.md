---
id: "20250628212840"
title: Contoh Pengkondisian Yang Lebih Kompleks di JavaScript
tags:
  - javascript
  - conditional
  - reference
  - flow_control
created: 2025-06-28T21:28:40+07:00
updated: 2025-07-10T17:48:25+07:00
---

```javascript
const usia = 18
const sudahPunyaSIM = true

if (usai >= 18) {
	console.log('Boleh Mengemudi Jika sudah punya SIM!')

	if (sudahPunyaSIM) {
		console.log('Sudah Punya SIM, Boleh Mengemudi')
	} else {
		console.loh('Belum Punya SIM, Tidak Boleh Mengemudi')
	}
} else {
	console.log('Masih Dibawah Umur, Tidak Boleh Mengemudi, Dan Belum Bisa Memiliki SIM')
}
```

**Penjelasannya**:

- Cek Apakah sudah berusia lebih dari sama dengan 18?
- Jika iya cetak `Boleh Mengemudi Jika sudah punya SIM!` dan lanjut cek apakah sudah punya sim? jika iya cetak `Sudah Punya SIM, Boleh Mengemudi`
- Else akan dijalankan jika tidak memenuhi syarat
- Perhatikan kondisinya, Kita bisa melakukan percabangan kondisi lebih dalam, atau kondisi bersarang (nesting conditions)

**Terkait**:

- [[20250628171342_operator_perbandingan_di_javascript]]
- [[Switch Statement Di JavaScript]]
- [[20250701054353_ternary_operator_di_javascript]]
