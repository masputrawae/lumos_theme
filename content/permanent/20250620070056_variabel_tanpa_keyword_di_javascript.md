---
id: '20250620070056'
title: Variabel Tanpa Keyword Di JavaScript
tags:
  - javascript
  - variable
  - strict_mode
  - scope
  - best_practice
created: 2025-06-20T07:00:56+07:00
updated: 2025-07-10T18:20:53+07:00
---

Jika lupa menulis atau bahkan sengaja tidak menulis keyword seperti -> `var`, `let` atau `const` saat mendeklarasikan variabel, maka **JavaScript** akan tetap membuat Variabel-nya tapi langsung di global object (`window` di browser, `global` di Node.js)

**Contoh**:

```javascript
// Kasus khusus tanpa keyword akan jadi var
z = 10 // Ini otomatis jadi global variable (seolah var z = 10 di global scope)
{
	z = 20
}
console.log(z)
```

## Konsekuensi dan Kenapa ini tidak disarankan?

- Replace/Penimpaan Variabel lain tanpa sengaja.
- Polusi Cakupan Global
- Sulit dilacak bug-nya.
- Kurangnya Kejelasan

Di mode `"strict"`, ini akan menghasilkan **error**.

```javascript
'use strict'
z = 10 // ❌ Error: z is not defined
```

## Rekomendasi

Selalu deklarasikan variabel menggunakan var , let , atau const untuk secara eksplisit menentukan cakupannya dan mencegah pembuatan variabel global yang tidak diinginkan. let dan const secara umum lebih disukai daripada var dalam JavaScript modern karena perilaku cakupan blok dan kontrol yang lebih baik atas kekekalan variabel.

## Terkait

- [[20250620070610_strict_mode_di_javascript]]
- [[20250630124757_alasan_let_dan_const_lebih_direkomendasikan]]
- [[20250630160418_perbedaan_var_let_dan_const]]
- [[20250630121354_alasan_keyword_var_di_javaScript_tidak_direkomendasikan]]
- [[20250630223952_mendeklarasikan_variabel_di_javascript]]
