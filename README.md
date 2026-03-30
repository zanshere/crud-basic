# CRUD Basic (Svelte + Express)

Project ini sudah disiapkan dengan:
- **Frontend:** SvelteKit (`/`)
- **Backend:** Express + TypeScript (`/backend`)

## 1) Install dependencies

```bash
npm install
npm --prefix backend install
```

## 2) Jalankan project (frontend + backend)

```bash
npm run dev:full
```

Default URL:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001`

## 3) Jalankan masing-masing service

Frontend saja:
```bash
npm run dev:frontend
```

Backend saja:
```bash
npm run dev:backend
```

## 4) Endpoint backend untuk cek health

```bash
GET /api/health
```
Contoh:
`http://localhost:3001/api/health`

## 5) Build

```bash
npm run build:full
```
