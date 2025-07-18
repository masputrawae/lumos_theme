---
id: "20250713143400"
title: Auto Generate _Index.md Untuk Hugo
tags:
  - python
  - automation
  - tools
  - snippet
created: 2025-07-13T14:34:00+07:00
updated: 2025-07-13T14:34:00+07:00
---

```python
import os
import re
import datetime

def normalize_title(folder_name):
    # Hilangkan prefix angka dan underscore/hyphen, contoh '01_nama_folder' -> 'nama_folder'
    cleaned = re.sub(r'^\d+[_-]?', '', folder_name)
    # Ganti underscore/hyphen menjadi spasi
    cleaned = re.sub(r'[_-]+', ' ', cleaned)
    # Kapitalisasi setiap kata
    return cleaned.title()

def generate_index_md(root_dir):
    today = datetime.date.today().isoformat()
    for current_dir, dirs, files in os.walk(root_dir):
        index_path = os.path.join(current_dir, "_index.md")
        if not os.path.exists(index_path):
            folder_name = os.path.basename(current_dir)
            normalized_title = normalize_title(folder_name)
            with open(index_path, "w", encoding="utf-8") as f:
                f.write(f"---\ntitle: {normalized_title}\ndate: {today}\n---\n")
            print(f"✅ Dibuat: {index_path} | Title: {normalized_title}")
        else:
            print(f"✅ Ada: {index_path}")

if __name__ == "__main__":
    # Ganti path berikut dengan path vault Obsidianmu
    root_path = "/path/to/obsidian/vault"
    generate_index_md(root_path)
```

## Terkait
- [[20250710010556_script_untuk_ambil_data_di_git_dengan_javascript]]
- [[20250625011618_cara_cepat_buat_typescale_dengan_scss]]
- [[20250625012270_breakpoint_scss]]