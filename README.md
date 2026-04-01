# Gleaning

A personal app to save and revisit the quotes that stay with you — from books, videos, talks, and conversations.

Quotes live on a scrollable feed and are organised by source on the Shelf. Full-text search lets you find anything across your collection. Press `F` on the feed to enter full display mode, or `⌘E` anywhere to quick-add a quote.

## Structure

```
gleaning/
├── frontend/   # Next.js web app
└── backend/    # FastAPI REST API
```

## Stack

| Layer    | Technology |
|----------|-----------|
| Frontend | Next.js, Tailwind CSS, shadcn/ui, Clerk |
| Backend  | FastAPI, SQLAlchemy, PostgreSQL (Neon) |
| Auth     | Clerk |
| Errors   | Sentry |

## Getting started

See the README in each subdirectory:

- [frontend/README.md](frontend/README.md)
- [backend/README.md](backend/README.md)
