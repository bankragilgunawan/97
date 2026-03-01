# 🎲 Sic Bo Analyzer Pro (Hybrid Strategy)

Aplikasi web penganalisa dadu Sic Bo dengan algoritma cerdas yang menggabungkan **Moving Average (MA)** untuk tren stabil dan **Pola Visual Recovery** untuk mengatasi kekalahan beruntun. Dilengkapi dengan manajemen risiko otomatis (TP/TS) dan akses premium.

---

## 🚀 Fitur Unggulan

### 1. Algoritma Sinyal Hybrid
Aplikasi tidak hanya menggunakan satu rumus, melainkan dua lapisan logika:
* **Mode Normal (MA3 & MA5):** Menggunakan pergerakan rata-rata 3 dan 5 periode terakhir untuk menentukan arah `BIG` atau `SMALL`. Sangat akurat pada tren pasar yang panjang.
* **Mode Recovery (Anti-Loss):** Jika terdeteksi **Loss 3x beruntun**, sistem otomatis masuk ke mode **OBSERVE (Wait)** selama 3 putaran untuk menenangkan psikologi dan menunggu pola stabil kembali.

### 2. Deteksi Pola Spesifik (Manual Logic)
Setelah masa observasi (Wait), sistem akan memindai pola berikut untuk akurasi tinggi:
* **BBBB / SSSS:** Mengikuti arus tren yang sangat kuat.
* **BSSS / SBBB:** Strategi memutus rantai di titik jenuh (Akhir Loss).
* **Twin Pattern (BSSB / SBBS):** Mendeteksi pola kembar untuk sinyal balik.
* **Pingpong (BSBS):** Mendeteksi ketidakstabilan dan menyarankan `WAIT`.

### 3. Manajemen Risiko Otomatis
* **Take Profit (TP):** Berhenti otomatis saat target kemenangan harian tercapai.
* **Trailing Stop (TS):** Fitur pengunci profit dinamis yang naik otomatis mengikuti profit tertinggi (Max Profit). Menjaga kemenangan agar tidak habis kembali.
* **Multi-Strategy:** Pilihan metode betting (Martingale, Parlay, 1-3-2-6, D'Alembert).

---

## 🔐 Aktivasi Lisensi Premium

Aplikasi ini diproteksi dengan sistem **Premium Access**. Untuk mendapatkan kode aktivasi selamanya, silakan hubungi admin melalui tautan di bawah ini:

👉 **[HUBUNGI ADMIN VIA WHATSAPP](https://wa.me/6282121218466?text=Halo%20Admin%2C%20saya%20ingin%20membeli%20kode%20aktivasi%20Sic%20Bo%20Analyzer%20Pro)** *(Klik tautan di atas untuk chat otomatis)*

---

## 🛠️ Cara Penginstalan (PWA)

Agar aplikasi bisa muncul di layar utama HP (Home Screen):
1. Pastikan file `index.html`, `manifest.json`, dan `sw.js` berada dalam satu folder di hosting HTTPS.
2. Buka link melalui **Chrome** (Android) atau **Safari** (iOS).
3. Klik **"Tambahkan ke Layar Utama"** atau **"Instal Aplikasi"**.

---

## 📖 Cara Penggunaan

1.  **Input Data:** Masukkan 3 angka dadu terakhir ke kolom yang tersedia.
2.  **Sinyal Awal:** Tunggu hingga minimal 6 data terisi agar indikator MA aktif.
3.  **Eksekusi:** Ikuti instruksi di kotak sinyal (BIG/SMALL/WAIT).
4.  **Recovery:** Jika Anda mengalami loss 3x, aplikasi akan memerintahkan `WAIT` selama 3 putaran. Ikuti perintah ini untuk menjaga modal.
5.  **Setup:** Klik tombol ⚙️ untuk mengatur **Base Bet**, **Target Profit**, dan **Trailing Stop**.

---

## ⚠️ Disclaimer
Aplikasi ini hanyalah alat bantu analisis probabilitas berdasarkan data historis. Tidak ada jaminan kemenangan 100%. Gunakan dengan bijak dan gunakan dana yang siap untuk menanggung risiko (Cold Money).

---

**Developed by:** [ragilgunawan.my.id]  
**Support:** [https://wa.me/6282121218466](https://wa.me/6282121218466)
