import React, { ReactNode } from "react";

/**
 * An HTML page template with CSS resets and some styling
 *
 * - includes the reboot CSS reset
 * - sets the html and body height to 100%
 */
function HtmlPage(props: { lang: string; children: ReactNode }) {
  return (
    <html lang={props.lang} style={{ height: "100%" }}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-reboot.min.css"
        />
      </head>
      <body style={{ height: "100%" }}>{props.children}</body>
    </html>
  );
}

export { HtmlPage };
