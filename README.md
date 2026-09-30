# Sharan Teja Medikar — AI Engineer Portfolio

A static, editorial portfolio built with Next.js, TypeScript and Tailwind CSS. Project content is maintained in `src/data/projects.ts`; ten evidence-led case studies are statically generated from a shared template and published at [sharantejamedikar.github.io](https://sharantejamedikar.github.io).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The production build exports static files to `out/`. Pushes to `main` deploy through the GitHub Pages workflow in `.github/workflows/deploy.yml`.

## Content notes

- The approved general AI Engineering CV is served at `public/cv/sharan-teja-medikar-cv.pdf`.
- Add repository or demo links only after confirming they are public and safe to share.
- Canonical, sitemap and robots URLs use `https://sharantejamedikar.github.io`.
