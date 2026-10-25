import installPageTemplate from "../scripts/install-page.html?raw";
import { chasOgIdentity } from "virtual:chas-og-identity";
import {
  acceptsHtml,
  createHeadInjector,
  isDocumentPath,
  isInstallQuery,
  renderInstallPageHtml,
  renderWebManifest,
} from "../scripts/chas-pwa-shared.mjs";

function requestHost(request: Request): string {
  return (
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    new URL(request.url).host
  );
}

export default {
  async fetch(request: Request, _env: unknown, _executionContext: unknown) {
    const method = request.method.toUpperCase();
    const url = new URL(request.url);
    const host = requestHost(request);

    if (method === "GET") {
      if (
        url.pathname === "/__chas/manifest.webmanifest" ||
        url.pathname === "/__chas/manifest.json"
      ) {
        return new Response(renderWebManifest(host), {
          headers: {
            "content-type": "application/manifest+json; charset=utf-8",
            "cache-control": "no-cache",
          },
        });
      }

      const urlWithQuery = url.pathname + url.search;
      if (
        isInstallQuery(urlWithQuery) &&
        isDocumentPath(url.pathname) &&
        acceptsHtml(request.headers.get("accept"))
      ) {
        return new Response(
          renderInstallPageHtml(installPageTemplate, { host, url: urlWithQuery }),
          {
            headers: {
              "content-type": "text/html; charset=utf-8",
              "cache-control": "no-cache",
            },
          },
        );
      }
    }

    // Cloudflare Worker variables are request-time bindings. Load the Start
    // server lazily on the first request so server modules that read their
    // runtime configuration during initialization do so inside the Worker.
    const { default: handler } = await import("@tanstack/react-start/server-entry");
    const response = await handler.fetch(request, {});
    if (
      method !== "GET" ||
      !isDocumentPath(url.pathname) ||
      !acceptsHtml(request.headers.get("accept")) ||
      !response.body ||
      !String(response.headers.get("content-type") ?? "").includes("text/html") ||
      response.headers.get("content-encoding")
    ) {
      return response;
    }

    const injector = createHeadInjector({ host, site: chasOgIdentity.site });
    const body = response.body.pipeThrough(
      new TransformStream<Uint8Array, Uint8Array>({
        transform(chunk, controller) {
          for (const output of injector.push(chunk)) controller.enqueue(output);
        },
        flush(controller) {
          for (const output of injector.flush()) controller.enqueue(output);
        },
      }),
    );
    const headers = new Headers(response.headers);
    headers.delete("content-length");
    return new Response(body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
