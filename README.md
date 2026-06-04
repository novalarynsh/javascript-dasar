# Penjelasan Project: HTML + JavaScript Dasar

---

## Gambaran Umum

Project ini adalah sebuah **website sederhana satu halaman** yang dibuat untuk mendemonstrasikan bagaimana HTML dan JavaScript bekerja bersama di browser — tanpa perlu server, tanpa framework, cukup tiga file biasa.

---

## Struktur File

```
project/
├── index.html   → Kerangka tampilan (isi halaman)
├── style.css    → Pengaturan tampilan (warna, font, layout)
└── script.js    → Logika interaktif (yang bikin website "hidup")
```

Memisahkan tiga file ini adalah praktik standar pengembangan web, dikenal sebagai **pemisahan tanggung jawab** — setiap file punya tugas masing-masing.

---

## Konsep Utama yang Digunakan

### 1. Client-Side Scripting
JavaScript di project ini berjalan **langsung di browser pengguna**, bukan di server. Artinya tidak butuh koneksi internet untuk bekerja — semua logika diproses di komputer yang membuka halaman tersebut.

### 2. Penyisipan JavaScript dalam HTML
JavaScript dihubungkan ke HTML cukup dengan satu baris di bagian bawah `index.html`:
```html
<script src="script.js"></script>
```
Begitu juga CSS:
```html
<link rel="stylesheet" href="style.css" />
```

### 3. Manipulasi DOM
DOM *(Document Object Model)* adalah cara JavaScript "membaca" dan "mengubah" isi halaman HTML. Bayangkan DOM seperti pohon — setiap elemen HTML adalah cabangnya, dan JavaScript bisa menjangkau cabang manapun lalu mengubahnya.

### 4. Event Handling
Event adalah "kejadian" yang terjadi di halaman — seperti klik tombol, ketik di input, atau tekan keyboard. JavaScript menangkap kejadian itu dan menjalankan fungsi sebagai responnya.

---

## Penjelasan Per Demo

---

### Demo 01 — Manipulasi DOM

**Apa yang terjadi:**
Pengguna mengetik nama, klik tombol "Sapa!", lalu teks di bawahnya berubah menampilkan pesan.

**Cara kerjanya:**
```javascript
function sapa() {
  const nama = document.getElementById('inp1').value;
  const output = document.getElementById('out1');

  if (nama.trim() === '') {
    output.innerText = 'Masukkan nama dulu!';
  } else {
    output.innerText = 'Halo, ' + nama + '! Selamat belajar!';
  }
}
```

| Baris kode | Artinya |
|---|---|
| `document.getElementById('inp1')` | Ambil elemen HTML yang punya `id="inp1"` |
| `.value` | Baca isi teks yang diketik pengguna |
| `output.innerText = ...` | Ubah teks yang tampil di layar |
| `if / else` | Cek kondisi — kalau kosong, tampilkan peringatan |

**Konsep:** Manipulasi DOM + Client-Side Scripting + Kondisi `if/else`

---

### Demo 02 — Event Handling (Counter)

**Apa yang terjadi:**
Ada angka besar di tengah, dengan tiga tombol: **−1**, **Reset**, dan **+1**. Setiap tombol diklik, angka berubah seketika.

**Cara kerjanya:**
```javascript
let angka = 0; // variabel global — menyimpan nilai counter

function ubahCounter(delta) {
  if (delta === 0) { angka = 0; }
  else { angka += delta; }

  document.getElementById('counter').innerText = angka;
}
```

```html
<!-- Di HTML, tombol memanggil fungsi saat diklik -->
<button onclick="ubahCounter(1)">+ 1</button>
```

| Konsep | Penjelasan |
|---|---|
| `onclick` | Event yang terpicu saat tombol diklik |
| `let angka = 0` | Variabel global yang diingat selama halaman terbuka |
| `angka += delta` | Tambah atau kurangi nilai |
| `innerText = angka` | Tampilkan nilai terbaru ke layar |

**Konsep:** Event Handling + Variabel Global + Update DOM

---

### Demo 03 — Manipulasi DOM Dinamis (To-Do List)

**Apa yang terjadi:**
Pengguna mengetik tugas, klik "Tambah" (atau tekan Enter), lalu item baru muncul di bawah. Bisa dicentang sebagai selesai, atau dihapus dengan tombol ✕.

**Cara kerjanya:**
```javascript
function tambahTodo() {
  const teks = document.getElementById('todo-inp').value.trim();
  if (!teks) return;

  const li = document.createElement('li');   // buat elemen baru
  const span = document.createElement('span');
  span.innerText = teks;

  const tombolHapus = document.createElement('button');
  tombolHapus.onclick = function() {
    document.getElementById('todo-list').removeChild(li); // hapus dari DOM
  };

  li.appendChild(span);         // masukkan teks ke dalam li
  li.appendChild(tombolHapus);  // masukkan tombol ke dalam li
  document.getElementById('todo-list').appendChild(li); // tampilkan ke halaman
}
```

| Fungsi | Artinya |
|---|---|
| `createElement('li')` | Buat elemen HTML baru secara dinamis |
| `appendChild(...)` | Tambahkan elemen sebagai anak dari elemen lain |
| `removeChild(li)` | Hapus elemen dari halaman |
| Event `keydown` di HTML | Deteksi tombol Enter saat mengetik |

**Konsep:** Manipulasi DOM Dinamis + Event Handling + Membuat & Menghapus Elemen

---

## Ringkasan

| Konsep | Demo yang Menerapkan |
|---|---|
| Client-side scripting | Semua demo (berjalan di browser) |
| Penyisipan JS dalam HTML | `<script src="script.js">` di index.html |
| Manipulasi DOM sederhana | Demo 01 & 02 |
| Manipulasi DOM dinamis | Demo 03 |
| Event handling dasar | Demo 01, 02, 03 |

---

## Kesimpulan

Project ini membuktikan bahwa dengan **tiga file dasar** (HTML, CSS, JavaScript), kita sudah bisa membangun halaman web yang interaktif dan responsif terhadap aksi pengguna — tanpa library tambahan, tanpa framework, hanya dengan kemampuan bawaan browser.

> *"JavaScript adalah jembatan antara halaman statis dan pengalaman yang hidup."*

[Link PPT](https://canva.link/m1b5rspcp8rrg43)
