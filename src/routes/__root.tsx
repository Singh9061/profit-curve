import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Profit Curve - Turning Media Into Profit" },
      { name: "description", content: "Supercharge your business with Profit Curve. We help businesses automate workflows, scale faster, and turn media into profit with AI-powered solutions." },
      { name: "author", content: "Profit Curve" },
      { name: "keywords", content: "profit curve, media marketing, business automation, AI, digital marketing, social media, Raebareli" },
      { property: "og:title", content: "Profit Curve - Turning Media Into Profit" },
      { property: "og:description", content: "Supercharge your business with Profit Curve. We help businesses automate workflows, scale faster, and turn media into profit with AI-powered solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Profit Curve - Turning Media Into Profit" },
      { name: "twitter:description", content: "Supercharge your business with Profit Curve. We help businesses automate workflows, scale faster, and turn media into profit with AI-powered solutions." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/15b817b6-67b0-453e-a1f3-769eb0dbc3a9/id-preview-b79d4913--c515af93-a482-465b-b28b-a42c0b71fec3.lovable.app-1775971269920.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/15b817b6-67b0-453e-a1f3-769eb0dbc3a9/id-preview-b79d4913--c515af93-a482-465b-b28b-a42c0b71fec3.lovable.app-1775971269920.png" },
    ],
    links: [
      {
        rel: "icon",
        href: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/15b817b6-67b0-453e-a1f3-769eb0dbc3a9/id-preview-b79d4913--c515af93-a482-465b-b28b-a42c0b71fec3.lovable.app-1775971269920.png",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Baloo+2:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
