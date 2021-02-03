import React from "react";

export default ({ url, shortUrl }) => (
  <html>
    <head>
      <title>URL shortener</title>
    </head>
    <body>
      <h1>shortened URL</h1>
      <p>{url}</p>
      <p>
        <a href={shortUrl} target="_blank" rel="noreferrer noopener">
          {shortUrl}
        </a>
      </p>
      <p>
        <a href="/">back</a>
      </p>
    </body>
  </html>
);
