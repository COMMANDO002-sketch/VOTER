# Regimental Backend (scaffold)

This is a minimal scaffold for a Node + Express + Prisma backend for the Regimental frontend.

Quick start:

```bash
cd regimental-backend
npm install
# set DATABASE_URL and JWT_SECRET in .env
npx prisma migrate dev --name init
npm run dev
```

API endpoints:
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/elections`
- `GET /api/elections/:id`
- `POST /api/elections` (admin)

Next steps: validation, vote endpoints, tests, CORS hardening, and frontend integration.
