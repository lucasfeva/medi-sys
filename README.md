# MediSys

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Database Integration**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Responsive Design**: Tailwind CSS with shadcn/ui components for a polished interface
- **Developer Experience**: ESLint, Prettier, and TypeScript for code quality
- **Performance Optimized**: Next.js App Router with optimized fonts (Geist)

## Tech Stack

### Frontend

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Modern UI components
- [Lucide React](https://lucide.dev/) - Icon library

### Backend & Database

- [PostgreSQL](https://postgresql.org/) - Relational database
- [Drizzle ORM](https://orm.drizzle.team/) - Type-safe database toolkit
- [pg](https://node-postgres.com/) - PostgreSQL client for Node.js

### Development Tools

- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
- [Drizzle Kit](https://orm.drizzle.team/kit-docs/overview) - Database migrations

## Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd medi-sys
    ```
2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables**

    ```bash
    cp .env.example .env
    ```

    Configure your environment variables in `.env`:

    ```bash
    # Database
    DATABASE_URL="postgresql://username:password@localhost:5432/medisys"
    ```

4.  **Set up the database**

    ```bash
    # Generate migrations
    npm run db:generate

    # Run migrations
    npm run db:migrate

    # Optional: Seed the database
    npm run db:seed
    ```

## Getting Started

1. **Set up the database**
   ```bash
   npm run dev
   ```
2. **Open your browser**  
   Visit [http://localhost:3000](http://localhost:3000)

3. **Start developing**  
   Edit files in the `src/app` directory. The page auto-updates as you edit.

## Project Structure

```bash
medi-sys/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable UI components
│   │   └── ui/              # shadcn/ui components
│   ├── db/                  # Database configuration and schema
│   └── lib/                 # Utility functions and configurations
├── public/                  # Static assets
├── .env                     # Environment variables
├── drizzle.config.ts        # Drizzle ORM configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── components.json          # shadcn/ui configuration
```

## Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint
- `npm run db:generate` – Generate database migrations
- `npm run db:migrate` – Run database migrations
- `npm run db:studio` – Open Drizzle Studio (if configured)

## UI Components

This project uses **shadcn/ui** for consistent, accessible UI components.

**Configuration:**

- **Style**: New York
- **Base Color**: Neutral
- **CSS Variables**: Enabled
- **Icon Library**: Lucide React

Add components:

```bash
npx shadcn@latest add [component-name]
```

## Database

PostgreSQL with Drizzle ORM ensures type-safe database operations.

- `drizzle.config.ts` – Drizzle configuration
- `src/db/` – Database schema and utilities

---

## Configuration Files

- `.eslintrc` – ESLint configuration
- `.prettierrc` – Prettier configuration
- `tailwind.config.js` – Tailwind CSS configuration
- `components.json` – shadcn/ui configuration
- `next.config.ts` – Next.js configuration

## Code Style

This project follows strict code quality standards:

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Simple Import Sort** for organized imports

Run `npm run lint` to check for issues.
