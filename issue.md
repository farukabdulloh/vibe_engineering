# Issue: Inisialisasi Project ElysiaJS + Drizzle ORM + MySQL dengan Bun

## 1. Ringkasan & Tujuan
Menginisialisasi project backend baru di direktori ini menggunakan runtime **Bun** dengan framework **ElysiaJS**, ORM **Drizzle**, dan database **MySQL**. Dokumen ini berfungsi sebagai panduan arsitektur tingkat tinggi (high-level roadmap) yang siap dieksekusi oleh programmer atau AI model implementer.

---

## 2. Tech Stack
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Web Framework**: [ElysiaJS](https://elysiajs.com/)
- **ORM & Migrations**: [Drizzle ORM](https://orm.drizzle.team/) & `drizzle-kit`
- **Database Driver**: MySQL driver (`mysql2`)
- **Environment Management**: Bun built-in env loader / `.env`

---

## 3. Rencana Implementasi (High-Level Steps)

### Fase 1: Inisialisasi Project & Dependensi
1. Inisialisasi workspace project dengan Bun (`bun init` atau setup `package.json`).
2. Pasang dependensi utama:
   - Framework: `elysia`
   - Database & ORM: `drizzle-orm`, `mysql2`
3. Pasang dev-dependencies:
   - CLI & Migration: `drizzle-kit`
   - TypeScript types: `@types/bun`, `@types/node` (jika diperlukan)
4. Buat file `.env.example` dan `.gitignore` (pastikan `node_modules` dan `.env` terabaikan).

### Fase 2: Struktur Direktori Modular
Rancang struktur folder yang bersih dan mudah dikembangkan, misalnya:
```text
├── src/
│   ├── config/       # Konfigurasi app & environment
│   ├── db/           # Koneksi database & schema Drizzle
│   │   ├── schema/   # Definisi tabel (schema files)
│   │   └── index.ts  # Inisialisasi instance Drizzle client
│   ├── routes/       # Handler / router Elysia
│   └── index.ts      # Entry point aplikasi Elysia
├── drizzle/          # Output file migrasi SQL dari drizzle-kit
├── drizzle.config.ts # Konfigurasi Drizzle Kit untuk MySQL
├── .env.example
├── package.json
└── tsconfig.json
```

### Fase 3: Konfigurasi Database & Drizzle ORM
1. Siapkan file konfigurasi `drizzle.config.ts` yang mengarah ke folder schema dan kredensial database MySQL dari environment variable.
2. Buat koneksi database pool menggunakan `mysql2` dan inisialisasi Drizzle ORM client.
3. Buat minimal satu contoh skema tabel (misal: tabel `users` atau `health_checks`) untuk memvalidasi integrasi schema.
4. Tambahkan script pada `package.json` untuk manajemen migrasi (`db:generate`, `db:migrate`, `db:push`, `db:studio`).

### Fase 4: Setup Server ElysiaJS & Endpoint Pengujian
1. Bangun entry point utama di `src/index.ts` dengan instance Elysia.
2. Buat endpoint dasar:
   - `GET /`: Health check dasar (mengembalikan status OK).
   - `GET /health/db` (atau endpoint uji coba): Memverifikasi koneksi database aktif dan dapat melakukan query sederhana via Drizzle.
3. Konfigurasi port default (misal: 3000) yang dapat di-override lewat environment variable.

---

## 4. Kriteria Keberhasilan (Acceptance Criteria)
- [x] Project terinisialisasi bersih dengan file `package.json` yang memuat script `dev`, `build`, dan database script.
- [x] Dependensi `elysia`, `drizzle-orm`, `mysql2`, dan `drizzle-kit` terpasang tanpa konflik versi.
- [x] File konfigurasi `drizzle.config.ts` tersedia dan siap membaca parameter MySQL dari `.env`.
- [x] Drizzle schema dan koneksi database terisolasi rapi di dalam folder `src/db/`.
- [x] Server Elysia dapat dijalankan menggunakan perintah `bun run dev` (atau `bun run --watch src/index.ts`) dan merespons request HTTP.
- [x] Dokumentasi singkat cara setup database lokal dan menjalankan project tercantum di README atau catatan implementasi.

---

## 5. Catatan untuk Implementer
- Gunakan environment variable untuk seluruh data sensitif (host, user, password, database).
- Jangan menyimpan credential rahasia di dalam commit Git.
- Pastikan TypeScript config (`tsconfig.json`) kompatibel dengan fitur modern Bun dan Drizzle schema typing.
