# Kandarp Mathur portfolio

Vite and React site for Cloudflare Pages. Case studies live at `/work/...`.

## Deploy

1. In Cloudflare, open Workers & Pages and create a project from `mentor-km/kandarp-resume`.
2. Build command: `npm run build`. Output directory: `dist`.
3. Add a custom domain on that project after you buy it in Cloudflare Registrar.

`public/_redirects` sends unknown paths to `index.html`, so a direct open of `/work/round1` works.

## Local

```bash
npm install
npm run dev
```
