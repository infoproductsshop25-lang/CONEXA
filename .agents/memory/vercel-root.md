---
name: Vercel root for CONEXA
description: External Vercel setup for the CONEXA Express app in this monorepo.
---

Set Vercel's **Root Directory** to the CONEXA artifact package rather than the repository root when deploying it separately.

**Why:** Its Vercel routing config deliberately targets a package-local `server.js`; using the repository root would point the build at a nonexistent entry point.

**How to apply:** When configuring a Vercel project or explaining deployment setup for CONEXA, select the package directory as Root Directory. Keep Replit's own artifact workflow settings separate.