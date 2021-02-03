import React from "react";

export default ({ shortId }) => {
  return (
    <html>
      <head>
        <title>URL shortener: not found</title>
      </head>
      <body>
        <h1>Not found</h1>
        <p>
          The URL with id <i>{shortId}</i> was not found
        </p>
        <p>
          <a href="/">Home</a>
        </p>
      </body>
    </html>
  );
};
