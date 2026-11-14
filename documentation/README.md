# ServeFlow documentation site

The documentation site, built with [Docusaurus](https://docusaurus.io).

## Structure

| Folder | Section | Path |
|---|---|---|
| `external/` | Docs for restaurant teams and integrators | `/docs` |
| `internal/` | Docs for support, operations, and developers | `/internal` |
| `project/` | Vision, business processes, architecture | `/project` |
| `src/pages/` | Home page and other standalone pages | `/` |
| `static/` | Images and downloadable files | `/` |

Docusaurus generates the sidebar of each section from its folder structure. To
change the order of pages, set `sidebar_position` in the front matter.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm start` | Start a local server with live reload |
| `npm run build` | Build the production site into `build/` |
| `npm run serve` | Serve the production build locally |
