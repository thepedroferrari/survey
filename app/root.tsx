import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import rootStyles from "./root.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: rootStyles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// https://remix.run/docs/en/1.16.1/pages/v2#catchboundary-and-errorboundary
export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 403) {
    return (
      <div>
        <h1>Unauthorized</h1>
        <p>You don't have access to this page</p>
      </div>
    );
  }

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div>
        <h1>Page not found</h1>
        <p>The page you tried to access does not exist</p>
      </div>
    );
  }
  return (
    <div>
      <h1>There was an error and we couldn't load the page.</h1>
    </div>
  );
}
