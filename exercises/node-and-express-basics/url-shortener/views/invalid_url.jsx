import React from "react";

export default ({ url }) => {
  return (
    <html>
      <head>
        <title>URL shortener: invalid URL</title>
      </head>
      <body>
        <h1>Invalid URL</h1>
        <p>
          <i>{url}</i> is not a valid URL
        </p>
        <p>
          <a href="/">Home</a>
        </p>
      </body>
    </html>
  );
};
