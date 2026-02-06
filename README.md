# Job Application Tracker

A clean, focused web app for tracking job applications end-to-end — companies, roles, stages, follow-ups, and outcomes. Built to replace messy spreadsheets and keep your job search organized and intentional.

## Core Features

- Track applications by company, role, location, and link
- Application pipeline stages (Applied → Screening → Interview → Offer → Rejected)
- Notes per application (interview prep, call summaries, recruiter details)
- Follow-up reminders with due dates
- Search and filter by company, role, stage, or date
- Lightweight analytics (applications over time, stage conversion)

## Tech Stack

- Next.js (App Router)
- TypeScript
- React
- Prisma ORM
- PostgreSQL (or SQLite for local development)

## Getting Started

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# Optional (if auth is enabled)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret"
```

For local SQLite development:

```bash
DATABASE_URL="file:./dev.db"
```

### Database setup

```bash
npx prisma generate
npx prisma migrate dev
```

### Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```
src/
  app/
  components/
  lib/
  styles/

prisma/
  schema.prisma
```

## Deployment

- Vercel (frontend)
- Railway / Supabase / Render (Postgres)

## License

MIT or proprietary.
