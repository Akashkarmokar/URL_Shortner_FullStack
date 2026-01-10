# URL Shortener — Full Stack 🚀

A simple, full-stack URL shortener built with:

- **BackEnd:** Express + TypeScript + Prisma (Postgres)
- **FrontEnd:** Next.js (React) UI
- **DB:** PostgreSQL (Postgres 15)
- **Auth:** JSON Web Tokens (JWT)

---

## Table of Contents

- [URL Shortener — Full Stack 🚀](#url-shortener--full-stack-)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features ✅](#features-)
  - [Architecture 🔧](#architecture-)
  - [Prerequisites](#prerequisites)
  - [Quickstart (recommended)](#quickstart-recommended)
  - [Run with Docker Compose (full stack)](#run-with-docker-compose-full-stack)
  - [Environment variables](#environment-variables)
  - [Extra Cautions: Scripts to help you to deep drive .](#extra-cautions-scripts-to-help-you-to-deep-drive-)
  - [Backend (Prisma \& scripts)](#backend-prisma--scripts)
  - [Frontend](#frontend)
  - [API endpoints (summary)](#api-endpoints-summary)
  - [Authentication flow](#authentication-flow)
  - [Troubleshooting ⚠️](#troubleshooting-️)

---

## Overview

This repo contains a lightweight URL shortener service with a web dashboard for authenticated users. Users can create shortened URLs, list/manage their URLs, and the server handles redirects for short links.

---

## Features ✅

- User authentication (signup / signin) using JWT
- Create, list, update, delete short URLs per user
- PostgreSQL database with Prisma ORM
- Dev-friendly setup (Docker + local scripts)

---

## Architecture 🔧

- Frontend: Next.js app (client-side pages and components) — runs on port **3001** in dev
- Backend: Express + TypeScript, exposes REST API under `/api/*` — runs on port **3000** in dev
- Database: Postgres, managed by Prisma

---

## Prerequisites

- Node.js 18+ and npm
- Docker & Docker Compose (if using containers)
- Git

---

## Quickstart (recommended)

Clone the repository:

```bash
git clone <repo-url> url-shortener
cd url-shortener
```

Start only the database (recommended when developing locally):

```bash
docker compose up -d postgres_db
```

Then set up and run the backend:

```bash
cd BackEnd
npm install
# create .env (see Environment variables section)
npx prisma generate
npx prisma migrate dev
npm run dev
```

Start the frontend:

```bash
cd ../FrontEnd
npm install
npm run dev -- -p 3001
```

Open the app at: `http://localhost:3001`

> Note: Backend default is `http://localhost:3000`. The frontend uses `NEXT_PUBLIC_API_BASE_URL` to configure the API base URL.

---

## Run with Docker Compose (full stack)

The provided `docker-compose.yaml` includes services for **nextjs**, **postgres_db**, and **express_app**. To run the full stack locally with Docker Compose:

```bash
docker compose up --build
```

After build the container build the table in Database first using below command.

```bash
docker compose exec express_app  npx prisma migrate deploy
```

Containers:

- `nextjs`: Next.js app (maps host 3001 -> container 3000)
- `express_app`: Backend service (maps host 3000 -> container 3000)
- `postgres_db`: PostgreSQL database (maps host 5432 -> container 5432)

If you only want the DB:

```bash
docker compose up -d postgres_db
```

---

## Environment variables

Examples are provided at `BackEnd/.env.example` and `FrontEnd/.env.local.example`.

BackEnd (`BackEnd/.env`):

```env
DATABASE_URL="postgresql://user:password@postgres_db:5432/url_shortener"
JWT_SECRET="your_jwt_secret"
PORT=3000
NODE_ENV=development
```

FrontEnd (`FrontEnd/.env.local`):

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

> Tip: When running with Docker Compose, use the docker service names in `DATABASE_URL` (e.g., `postgres_db`) so containers can reach the DB.

---

**_Note: If you can do up to this, system is ready to run_**

## Extra Cautions: Scripts to help you to deep drive .

## Backend (Prisma & scripts)

Key scripts (in `BackEnd/package.json`):

- `npm run dev` — start backend in dev mode with auto-reload
- `npm run build` — compile TypeScript
- `npm start` — run the compiled build

Prisma:

```bash
npx prisma generate       # generate client
npx prisma migrate dev    # apply migrations (local dev)
npx prisma db push       # push schema without migrations (dev only)
```

Migrations live under `BackEnd/prisma/migrations/`.

---

## Frontend

Key scripts (in `FrontEnd/package.json`):

- `npm run dev` — start Next.js dev server (use `-p 3001` to run on 3001)
- `npm run build` and `npm start` — build and serve

The frontend stores the JWT token in a cookie (`token`) after signing in.

---

## API endpoints (summary)

Auth:

- `POST /api/auth/signup` — register (body: `{ email, password }`)
- `POST /api/auth/signin` — login (body: `{ email, password }`) → returns `{ token }`
- `GET /api/auth/me` — (protected) returns user info (id, email)

URLs (protected):

- `POST /api/urls/url-create` — create short URL (body: `{ originalURL }`)
- `GET /api/urls/all` — list user URLs
- `GET /api/urls/:id` — get URL detail
- `PUT /api/urls/:id` — update URL
- `DELETE /api/urls/delete/:id` — delete URL

Redirects (public):

- `/r/:shortId` (or similar) — redirects to the original URL (check `BackEnd` routes)

---

## Authentication flow

1. User signs in via `/api/auth/signin` and receives a JWT.
2. Frontend stores the token (cookie) and includes it in the `Authorization: Bearer <token>` header for protected API requests.
3. Backend middleware validates the token on protected routes and attaches `userId` to the request.

---

## Troubleshooting ⚠️

- CORS: Ensure `http://localhost:3001` (or your frontend origin) is allowed in backend CORS settings.
- Database connection: Verify `DATABASE_URL` points to a running Postgres instance and migrations applied.
- Token errors: If you receive 401s, remove the stored cookie and re-login.
- Ports: If 3000/3001/5432 already in use, change host ports in `docker-compose.yaml` or use different dev ports.

---
