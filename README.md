# Vibe Engineering - ElysiaJS + Drizzle ORM + MySQL dengan Bun

Backend service modern berkinerja tinggi yang dibangun menggunakan runtime **Bun**, framework **ElysiaJS**, ORM **Drizzle**, dan database **MySQL**.

---

## 🛠️ Tech Stack
- **Runtime**: [Bun](https://bun.sh/) (v1.2+)
- **Framework**: [ElysiaJS](https://elysiajs.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Migration & Kit**: `drizzle-kit`
- **Database Driver**: `mysql2`

---

## 📁 Struktur Direktori
```text
.
├── drizzle/                  # File migrasi SQL hasil generate Drizzle Kit
├── src/
│   ├── config/
│   │   └── env.ts            # Validasi dan konfigurasi environment
│   ├── db/
│   │   ├── schema/           # Definisi tabel Drizzle
│   │   │   ├── index.ts      # Re-export seluruh schema
│   │   │   └── users.ts      # Contoh schema tabel users
│   │   └── index.ts          # Inisialisasi pool MySQL & Drizzle client
│   ├── routes/
│   │   ├── health.ts         # Route GET / dan GET /health/db
│   │   └── users.ts          # Contoh endpoint REST API untuk users
│   └── index.ts              # Entry point aplikasi Elysia
├── .env.example              # Template variabel lingkungan
├── drizzle.config.ts         # Konfigurasi Drizzle Kit untuk MySQL
├── package.json
└── tsconfig.json
```

---

## 🚀 Memulai (Quick Start)

### 1. Prasyarat
- [Bun](https://bun.sh/) telah terinstal di komputer.
- Database MySQL aktif (lokal via XAMPP, Docker, dsb).

### 2. Setup Environment
Salin file `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
Sesuaikan konfigurasi koneksi MySQL di file `.env`:
```env
PORT=3000
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=vibe_engineering
```

### 3. Install Dependensi
```bash
bun install
```

### 4. Database Migrations (Drizzle Kit)
- **Generate migrasi SQL baru**:
  ```bash
  bun run db:generate
  ```
- **Push skema langsung ke database**:
  ```bash
  bun run db:push
  ```
- **Jalankan migrasi**:
  ```bash
  bun run db:migrate
  ```
- **Buka Drizzle Studio GUI**:
  ```bash
  bun run db:studio
  ```

### 5. Menjalankan Server
- **Development (Hot Reload)**:
  ```bash
  bun run dev
  ```
- **Production Mode**:
  ```bash
  bun run start
  ```
- **Build**:
  ```bash
  bun run build
  ```

---

## 📡 API Endpoints

| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/` | Health check dasar server |
| `GET` | `/health/db` | Health check koneksi database MySQL |
| `GET` | `/users` | Mengambil seluruh data user dari database |
| `POST` | `/users` | Menambahkan user baru `{ "name": "...", "email": "..." }` |
