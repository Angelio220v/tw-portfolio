# ServeFlow documentation portfolio

[![Documentation](https://github.com/Angelio220v/tw-portfolio/actions/workflows/docs.yml/badge.svg)](https://github.com/Angelio220v/tw-portfolio/actions/workflows/docs.yml)

A technical writing portfolio built around **ServeFlow**, a fictional
restaurant order platform. The repository shows the full documentation
cycle: product vision and business analysis, a code-first API, and a
documentation portal for external and internal audiences.

> ServeFlow is a fictional product. Any match with a real company or
> product is accidental.

## Repository structure

| Folder | Contents |
|---|---|
| [`product/`](product/) | API stubs and data models. The build generates the API reference from them. |
| [`documentation/`](documentation/) | The documentation site (Docusaurus) and other documents. |
| [`.github/workflows/`](.github/workflows/) | CI/CD: build and deploy to Netlify. |

## Documentation site

The site has three sections:

- **Docs**: guides for restaurant teams and integrators.
- **Internal**: documentation for support, operations, and developers.
- **Project**: product vision, business processes, and architecture
  decisions.

## Docs as code

- Every page is a Markdown file in this repository.
- A push to `main` builds the site and deploys it to Netlify.
- A pull request gets its own preview deploy.
- [Vale](https://vale.sh) checks the writing style, and
  [markdownlint](https://github.com/DavidAnson/markdownlint) checks the
  Markdown syntax.

## Run locally

Requirements: Node.js 22 or later.

```bash
cd documentation
npm install
npm start
```

The site opens at `http://localhost:3000`.
