---
id: '20250620070610'
title: Strict Mode Di JavaScript
tags:
  - javascript
  - strict_mode
  - best_practice
  - scope
  - syntax
  - error_handling
created: 2025-06-20T07:06:10+07:00
updated: 2025-07-10T18:18:42+07:00
---

Mode `"use strict"` di JavaScript adalah sebuah fitur yang membuat aturan kode javascript lebih ketat. Kalau di mode biasa JavaScript akan lebih toleran atau aturan lebih longgar terhadap kode, misalnya Variabel Tanpa Keyword Di JavaScript kalau tidak dalam mode `"use strict"` maka tidak akan error, tapi jika pakai mode `"use strict"`, maka akan muncul error.

## Cara mengaktifkan

Taruh di awal kode:

```javascript
'use strict'
```

Misalnya:

```javascript
'use strict'
x = 10 // ERROR: x is not defined
```

Jika tanpa mode Strict:

```javascript
x = 5 // Tidak error walaupun kamu tidak deklarasikan `x`
```

---

> [!note]
> Kalau kamu pakai module (`type="module"` di HTML atau file `.mjs`), JavaScript otomatis dalam mode strict—tanpa perlu `"use strict"` lagi.

## Terkait

- [[20250620070056_variabel_tanpa_keyword_di_javascript]]
- [[20250630124757_alasan_let_dan_const_lebih_direkomendasikan]]
- [[20250630160418_perbedaan_var_let_dan_const]]
- [[20250630121354_alasan_keyword_var_di_javaScript_tidak_direkomendasikan]]