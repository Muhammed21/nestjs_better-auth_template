## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- PostgreSQL

### Installation

```bash
# Install dependencies
pnpm install && pnpm build

# Setup database
cd apps/api
npx prisma generate
npx prisma migrate dev
```

### Environment Variables

Create a `.env` file in `apps/desyn-gateway/`:

```env
# Application
NODE_ENV=development
PORT=
API_VERSION=v1

# Client URL
CLIENT_URL=

# Database
DATABASE_URL=""
DIRECT_URL=""

# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

# Figma OAuth
FIGMA_CLIENT_ID=
FIGMA_CLIENT_SECRET=
FIGMA_REDIRECT_URI=     
```

### Development

```bash
# Run backend
pnpm dev
```

and visit `http://localhost:PORT/api/auth/reference`.
