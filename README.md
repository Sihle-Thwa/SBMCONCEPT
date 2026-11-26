# SBM Concepts

SBM Concepts is a technology consulting website for presenting the firm's digital services and helping prospective clients explore project options. The site describes web and software development, DevOps and cloud services, and IT consulting, with information about capabilities, pricing, and example work.

## What the site includes

- **Home** - an overview of the business, its value propositions, and featured pricing.
- **Services** - service descriptions and industries served.
- **Pricing** - indicative service tiers and frequently asked questions.
- **Quote calculator** - an interactive estimate based on project type, selected features, page count, and timeline. Estimates are preliminary, not formal quotes.
- **About** - mission, competencies, technology areas, and compliance information.
- **Portfolio** - example project summaries and a featured case study.
- **Contact** - contact details and a project inquiry form.

The application is a client-side frontend. It currently has no backend integration: the contact form displays a local success message and does not send or store submissions. Portfolio entries and pricing are presented as website content and should be confirmed with SBM Concepts before being treated as current client work or binding offers.

## Technology

- React 19 and TypeScript
- Vite
- React Router
- Tailwind CSS 4, with project-specific CSS
- Radix UI-based components, Lucide icons, and Framer Motion

## Run locally

Requirements: Node.js and npm.

```bash
cd frontend
npm install
npm run dev
```

Vite starts the development server on port `8080` by default.

## Available scripts

Run these from the `frontend/` directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Type-check the project and create a production build. |
| `npm run lint` | Run ESLint. |
| `npm run preview` | Preview the production build locally. |

## Project structure

```text
frontend/
  public/          Static assets
  src/
    components/    Shared layout, homepage, and UI components
    hooks/         React hooks
    lib/           Shared utilities
    pages/         Route-level pages
    App.tsx        Client-side routes
    main.tsx       Application entry point
  index.html
  package.json
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/services` | Services |
| `/pricing` | Pricing |
| `/quote` | Quote calculator |
| `/about` | About |
| `/portfolio` | Portfolio |
| `/contact` | Contact |

Unmatched paths display a not-found page.
