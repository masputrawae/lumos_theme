---
id: "20250710010556"
title: Script Untuk Ambil Data Di Git Dengan JavaScript
tags:
  - javascript
  - snippet
  - git
  - node_js
  - version_control
created: 2025-07-10T01:05:56+07:00
updated: 2025-07-10T18:18:14+07:00
---

Skrip ini tidak dijalankan di browser, ini hanya bisa dijalankan dengan node js

```javascript
import { execSync } from 'child_process'
import fs from 'fs'

/**
 * Mengambil riwayat perubahan untuk file di ./src/content/docs/
 * Membatasi hanya 100 commit terbaru.
 * Menghasilkan mapping file → daftar commit yang memengaruhinya,
 * lengkap dengan metadata dan ringkasan diff setiap commit.
 */
function getFullHistoryMap() {
	// Jalankan git log dengan format khusus + nama file yang berubah
	// --pretty=format:"..." menentukan info metadata commit.
	// --name-only membuat git log mencetak nama file yang berubah di setiap commit.
	const output = execSync(
		`git log --max-count=100 --pretty=format:"%H|%at|%s|%an|%ae|%cn|%ce|" --name-only -- ./src/content/docs/`,
		{ encoding: 'utf-8' }
	)

	const map = {} // Akan berisi: { filePath: [ { commitData, diff }, ... ] }
	const lines = output.split('\n') // Pisahkan output git log menjadi baris-baris
	let currentCommit = null // Menyimpan metadata commit saat ini

	for (const line of lines) {
		if (!line.trim()) continue // Lewati baris kosong

		if (line.includes('|')) {
			// Jika baris ini mengandung "|", berarti ini baris metadata commit.
			const [
				hash, // hash pendek commit
				timestamp, // waktu authoring dalam epoch detik
				message, // pesan singkat commit
				authorName,
				authorEmail, // data author
				committerName,
				committerEmail // data committer
			] = line.split('|')

			// Buat objek currentCommit berisi metadata
			currentCommit = {
				hash,
				date: new Date(Number(timestamp) * 1000).toISOString(),
				message,
				author: {
					name: authorName,
					email: authorEmail
				},
				committer: {
					name: committerName,
					email: committerEmail
				}
			}
		} else if (currentCommit) {
			// Baris ini nama file yang berubah pada currentCommit
			const file = line.trim()

			// console.log(`⏳ Processing ${file} @ ${currentCommit.hash}`) Opsional Jika Perlu
			console.log(`⏳ Processing ${file} @ ${currentCommit.hash}`)

			// Jika file belum ada di map, buat array kosong
			if (!map[file]) map[file] = []

			let diff = ''
			try {
				// Ambil ringkasan diff (stat) hanya untuk file ini di commit ini
				// Opsional Lebih lama: diff = execSync(`git show --stat ${currentCommit.hash} -- ${file}`, { encoding: 'utf-8' })
				diff = execSync(`git show --stat ${currentCommit.hash}`, { encoding: 'utf-8' })
				diff = diff.split('\n').find((line) => line.includes('file changed')) || ''
			} catch (err) {
				console.warn(`⚠️ Gagal ambil diff untuk ${file} di commit ${currentCommit.hash}:`, err)
			}

			// Tambahkan data commit + diff ke daftar riwayat file ini
			map[file].push({
				...currentCommit,
				diff
			})
		}
	}

	return map
}

// Panggil fungsi untuk menghasilkan history map
const map = getFullHistoryMap()

// Simpan hasil ke file JSON di ./src/content/data/historyOnGit.json
// Optional JSON.stringify(map, null, 2) jika ingin output rapih
fs.writeFileSync('./src/content/data/historyOnGit.json', JSON.stringify(map))

console.log(`✅ History map generated: ${Object.keys(map).length} files with diffs`)
```

## Terkait
- [[20250713143400_auto_generate_index_md_di_hugo_dengan_python]]
- [[20250621101503_tandai_link_halaman_aktif_di_astro]]
- [[20250625011618_cara_cepat_buat_typescale_dengan_scss]]
- [[20250625012270_breakpoint_scss]]