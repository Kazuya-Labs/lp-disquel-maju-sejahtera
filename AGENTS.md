## Project
- Astro 7 landing page for PT Dysquel Maju Sejahtera. Bun is the package manager (`bun.lock`); use `bun install`, `bun run dev|build|preview`, `bun astro ...`. Requires Node >= 22.23.4 (`package.json` engines).
- Tailwind v4 is enabled only through `@tailwindcss/vite` in `astro.config.mjs`; there is no `tailwind.config.*`. `src/styles/global.css` is imported by `src/layouts/Layout.astro` and defines the VoiceBox design tokens via `@theme`.
- i18n: `id` (default, at `/`), `en` (`/en/`), `zh` (`/zh/`). Localized entry pages are `src/pages/index.astro`, `src/pages/en/index.astro`, `src/pages/zh/index.astro`; all share `src/components/LandingPage.astro`. Copy lives in `src/i18n/translations.ts`, company data in `src/data/site.ts`.
- No lint/test/typecheck scripts exist. `bun astro check` requires `@astrojs/check` and `typescript`, which are not installed; use `bun run build` as the verification step.

## CLI
- Use `rtk` wrappers for shell commands: `rtk git`, `rtk bun`, `rtk bunx`, `rtk wget`, `rtk curl`, and `rtk run` for anything else.

## Development
- Start the dev server in the background: `astro dev --background`. Manage it with `astro dev stop`, `astro dev status`, `astro dev logs` (`logs --follow` streams).

## Product brief
- `.prd/prd.md` is the active request: redesign the UI using `.prd/DESIGN.md` ("VoiceBox" editorial system) as the visual reference; take content from https://dysquel.wixsite.com/dysquel.
- The brief asks for a new branch before changing existing work, and to ask the user when information is missing.
