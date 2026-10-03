# dev-s-chauhan.github.io

Portfolio site for Dev Singh Chauhan, served at https://dev-s-chauhan.github.io/.

Next.js (App Router) static export. All copy and links live in `src/content.ts`; any link left as `""` is not rendered.

```bash
npm install
npm run dev     # local dev server
npm run build   # static export to out/
```

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.
