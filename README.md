# build-with-chas.dev

## Cloudflare deployment

This TanStack Start app is configured for **Cloudflare Workers** using `@cloudflare/vite-plugin` and Wrangler. It is not configured as a static Cloudflare Pages upload. The Worker build publishes the app's generated client assets and SSR handler; it does not upload the repository root. Files under `attachments/` remain in the repository, while website assets in `public/` are copied into the generated client output.

For local development, run `npm ci` and then `npm run dev`. Validate a production build with `npm run build`; deploy with `npx wrangler login` followed by `npm run deploy`. The deploy script rebuilds the app and runs `wrangler deploy`.

To connect the GitHub repository to Cloudflare, create a **Workers Builds** project (not a Pages project), connect this repository, set the build command to `npm run build`, and leave the deploy command as `npx wrangler deploy` (or use `npm run deploy` with no separate build command). Alternatively, deploy from a machine with Wrangler authenticated to the intended Cloudflare account.

The existing PWA behavior is retained by the Worker entry in `src/server.ts`: `/__chas/manifest.webmanifest`, the `?install=1` installation tutorial, and streaming PWA/Open Graph head metadata remain active.

### Runtime configuration

Set production environment variables and secrets in the Cloudflare Worker settings (or with Wrangler). Keep private credentials in Worker secrets, not in source control. The existing app auth and database settings continue to use their existing names and application contracts; configure them only if those features are being enabled. Database access through PostgreSQL on Workers may require Cloudflare Hyperdrive or another Workers-compatible database connection, and should be configured before enabling production database-backed auth/data features.

The oversized `attachments/1000080906.mp4` is preserved in the repository and is not part of the app's public website assets. The public website video at `public/media/move.mp4` remains included in the built site.
