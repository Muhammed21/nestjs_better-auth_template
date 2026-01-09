# Desyn

Desyn is a design system management application built as a Turborepo monorepo with a NestJS backend API gateway and a Next.js frontend.

## Technology Stack

- **Monorepo**: Turborepo with pnpm workspaces
- **Backend**: NestJS with Clean Architecture (Domain-Driven Design)
- **Frontend**: Next.js 16 with React 19
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Better-Auth integration
- **Validation**: Zod for runtime type validation
- **TypeScript**: Strict typing across all packages

## Project Structure

```
desyn/
├── apps/
│   ├── web/                    # Next.js frontend application
│   └── desyn-gateway/          # NestJS API gateway (Clean Architecture)
├── packages/
│   ├── ui/                     # Shared React component library
│   ├── types/                  # Shared TypeScript types and Zod schemas
│   ├── eslint-config/          # Shared ESLint configurations
│   └── typescript-config/      # Shared TypeScript configurations
```

## Backend Architecture (desyn-gateway)

The NestJS gateway follows **Clean Architecture** principles with a three-layer structure:

```
src/
├── core/                       # Business logic layer
│   ├── domain/                 # Entities, value objects, domain logic
│   └── application/            # Use cases and port interfaces
├── infrastructure/             # External services layer
│   ├── repository/             # Concrete repository implementations
│   └── betterAuth/             # Authentication service integration
├── presentation/               # HTTP layer
│   ├── http/dto/               # Data Transfer Objects
│   ├── *.controller.ts         # HTTP controllers
│   └── presenter/              # Response formatters
└── shared/                     # Cross-cutting concerns
    ├── pipes/                  # Validation pipes (ZodValidationPipe)
    ├── filters/                # Exception filters
    └── exceptions/             # Custom exceptions
```

### Architecture Layers

#### Core Layer
Contains the business logic, completely independent of external frameworks:

- **Domain**: Entities, value objects, and domain rules
- **Application**: Use cases that orchestrate business operations and port interfaces (repository abstractions)

#### Infrastructure Layer
Implements concrete adapters for external services:

- Repository implementations (Prisma)
- Better-Auth integration for authentication
- External service adapters

#### Presentation Layer
Handles HTTP communication:

- Controllers for routing
- DTOs for request/response validation
- Presenters to transform domain entities to HTTP responses

### Module Organization Pattern

Each feature follows this structure:

```
feature/
├── core/
│   ├── application/
│   │   ├── port/              # Repository interfaces
│   │   └── useCases/          # Business logic use cases
│   └── domain/
│       ├── *.entity.ts        # Domain entities
│       └── value-objects/     # Value objects
├── infrastructure/
│   └── repository/            # Concrete repository implementations
└── presentation/
    ├── http/dto/              # HTTP DTOs
    ├── *.controller.ts
    └── presenter/             # Response formatters
```

### Key Design Patterns

| Pattern | Description |
|---------|-------------|
| **Use Cases** | All business logic encapsulated in use case classes |
| **Repository Pattern** | Core defines port interfaces, infrastructure provides implementations |
| **Dependency Inversion** | Controllers → Use Cases → Port Interfaces |
| **Validation** | Zod schemas validate at presentation layer via custom pipe |
| **Error Handling** | Global ZodValidationFilter catches and formats validation errors |

### Database Models

- `DesignSystem` - Design system container
- `ColorToken` - Color tokens with multiple format support (hex, hsl, oklch, rgb)
- `User`, `Session`, `Account`, `Verification` - Authentication models

## API Documentation (Swagger)

When the backend is running, Swagger documentation is available at:

```
http://localhost:8080/api/v1
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- PostgreSQL

### Installation

```bash
# Install dependencies
pnpm install

# Setup database
cd apps/desyn-gateway
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
# Run all apps
pnpm dev

# Run specific app
pnpm --filter=web dev              # Next.js on port 3000
pnpm --filter=desyn-api dev        # NestJS on port 8080
```

### Building

```bash
# Build all apps
pnpm build

# Build specific app
pnpm --filter=web build
pnpm --filter=desyn-api build
```

### Testing

```bash
cd apps/desyn-gateway

pnpm test           # Run tests
pnpm test:watch     # Watch mode
pnpm test:cov       # Coverage
pnpm test:e2e       # E2E tests
```

### Database Commands

```bash
cd apps/desyn-gateway

npx prisma generate                      # Generate Prisma client
npx prisma migrate dev                   # Run migrations
npx prisma migrate dev --name <name>     # Create new migration
npx prisma studio                        # Open Prisma Studio
```

## Linting & Formatting

```bash
pnpm lint          # Lint all packages
pnpm check-types   # Type check all packages
pnpm format        # Format code
```
