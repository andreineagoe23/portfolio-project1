# Portfolio Project

This is a React + Vite + TypeScript portfolio site using Tailwind CSS and shadcn-ui components.

## Local development

```sh
npm i
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Deploying to GitHub Pages

This project is configured for GitHub Pages:

- Vite `base` is set to `./` for relative assets.
- Routing uses `HashRouter` to avoid 404s on refresh.

Steps:

1. Push this repo to GitHub.
2. Enable Pages in the repo settings (deploy from `gh-pages` or `docs` as desired). For static hosting from the `dist` folder, you can use an action like `peaceiris/actions-gh-pages` to publish `dist/` to the `gh-pages` branch after `npm run build`.

No third-party builder branding remains in this repository.
