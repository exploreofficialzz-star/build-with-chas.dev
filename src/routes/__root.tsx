import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SITE, SOCIALS } from "@/data/content";
import appCss from "../styles.css?url";

const THEME_BOOT = `(function(){try{var t=localStorage.getItem("chas-theme");var dark=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",dark);}catch(e){}})();`;

const description =
  "Chidalu Silas Ogbala, known as chAs. Founder of chAs Technologies LLC, building enV and Rumuo from Ebonyi State, Nigeria.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "chAs — Chidalu Silas Ogbala" },
      { name: "description", content: description },
      { name: "theme-color", content: "#07080c" },
      { name: "author", content: SITE.legal },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__chas/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__chas/icon-180.png" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.legal,
    alternateName: SITE.name,
    email: SITE.email,
    telephone: SITE.phoneTel,
    jobTitle: "Founder",
    worksFor: { "@type": "Organization", name: SITE.company },
    brand: SITE.brand,
    homeLocation: SITE.location,
    birthDate: "2004-04-11",
    url: `https://${SITE.domain}`,
    sameAs: SOCIALS.map((social) => social.href),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
