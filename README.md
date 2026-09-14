# Sharan Teja Medikar — AI Engineer Portfolio

A static, editorial portfolio built with Next.js, TypeScript and Tailwind CSS. Project content is maintained in `src/data/projects.ts`; five case studies are statically generated from a shared template.

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

The production build has no required environment variables or external runtime services. Deploy to any Next.js-compatible Node.js host with `npm ci && npm run build`, then `npm start`. Set canonical and site URLs only after a production domain is confirmed.

## Content notes

- Add the approved final CV at `public/cv/sharan-teja-medikar-cv.pdf`, then replace the disabled “CV · coming soon” label in `src/app/page.tsx` with a link to that path. The directory contains a placeholder note only.
- Add repository or demo links only after confirming they are public and safe to share.
- Set a canonical production URL during deployment; no portfolio domain is assumed.
