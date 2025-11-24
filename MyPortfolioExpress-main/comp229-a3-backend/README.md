# COMP229 A3 Backend – Ready to Run

**Author:** Andres Quintero  
**Created:** 2025-10-07

## Setup
1. Copy this folder into your project root (or run standalone).
2. Duplicate `.env.example` to `.env` and edit values.
3. Install and run:
```bash
npm install
npm run dev
```
App starts on `http://localhost:3000/api`

## Endpoints
- GET `/api` → welcome message
- Contacts: GET/GET:id/POST/PUT:id/DELETE:id/DELETE `/api/contacts`
- Users:    GET/GET:id/POST/PUT:id/DELETE:id/DELETE `/api/users`

## Screenshots to include
- MongoDB `skeleton` DB showing `contacts` and `users`
- Connection string (redacted)
- GET `/api` welcome JSON
- CRUD tests for both resources
