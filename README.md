# URL Shortener Full Stack 🚀

This repository contains a full-stack URL shortener with:

- BackEnd: Express + TypeScript + Prisma (Postgres)
- FrontEnd: Next.js (React) UI
- Docker Compose: PostgreSQL database service

---

## Quick Start (recommended)

1. Clone the repo

```bash
git clone <repo-url> url-shortener
cd url-shortener
```

2. Start PostgreSQL with Docker Compose

```bash
docker-compose up -d postgres_db
```

This spins up a Postgres 15 container (service name: `postgres_db`).

3. Backend: install deps, set env, run migrations

```bash
cd BackEnd
npm install
```

Create a `.env` file in `BackEnd/` (example values):

```env
DATABASE_URL="postgresql://user:password@localhost:5432/url_shortener"
JWT_SECRET="your_secret_here"
PORT=3000
```

Generate the Prisma client and apply migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

Run backend in development mode (auto-reloads):

```bash
npm run dev
```

The backend listens on `http://localhost:3000` by default.

> Note: The backend's CORS is configured to allow `http://localhost:3001` (Next.js dev in this repo uses port `3001`). Either run the frontend on `3001` or update `BackEnd/src/index.ts` CORS origin accordingly.

4. Frontend: install deps and run on port 3001

```bash
cd ../FrontEnd
npm install
npm run dev -- -p 3001
```

Open the app at: `http://localhost:3001`

> The frontend uses hard-coded API endpoints that target `http://localhost:3000/api/...`. Keep the backend running on `3000` and the frontend on `3001` to match the CORS config.

---

## Alternative: Run everything in Docker (DB only by default)

The provided `docker-compose.yaml` currently only starts the Postgres service. If you prefer running backend and frontend in containers, you can:

- Uncomment and extend the `nextjs` and `express_app` services in `docker-compose.yaml`, or
- Build and run the Dockerfiles in `BackEnd/` and `FrontEnd/` manually.

Example: to run only DB with compose (already shown above):

```bash
docker-compose up -d postgres_db
```

---

## Environment variables

- `DATABASE_URL` — Postgres connection string (required by Prisma)
- `JWT_SECRET` — secret for signing authentication tokens (required)
- `PORT` — backend port (defaults to `3000`)

You can add additional vars in `BackEnd/.env` as needed.

---

## Prisma & Database

- Migrations are in `BackEnd/prisma/migrations/`.
- To re-run migrations or apply them to a fresh DB: `npx prisma migrate dev`.
- If you need to sync schema without migrations for quick local experiments: `npx prisma db push`.

---

## Useful Commands

- Backend dev: `cd BackEnd && npm run dev`
- Backend build: `cd BackEnd && npm run build` then `npm start`
- Frontend dev: `cd FrontEnd && npm run dev -- -p 3001`
- Start Postgres: `docker-compose up -d postgres_db`

---

## Troubleshooting

- CORS errors: ensure frontend origin (`http://localhost:3001`) matches the allowed origin in `BackEnd/src/index.ts` or change the frontend port.
- Prisma errors: confirm `DATABASE_URL` is reachable and migrations applied.
- Port conflicts: change `PORT` in `.env` or change the port when starting the frontend with `-p`.

---

## Notes

- There are existing Prisma migrations under `BackEnd/prisma/migrations/` — use `npx prisma migrate dev` to apply them when the DB is ready.
- Frontend pages call `http://localhost:3000/api/...` directly — if you change backend port, update all API URLs or run the frontend with a proxy.

---

If you want, I can also:

- Add a `.env.example` file to the repo,
- Add a single `docker-compose` configuration that starts DB + backend + frontend together,
- Or update CORS to allow `http://localhost:3000` as well (so frontend can run on `3000`).

Let me know which of those you'd like next. ✅
