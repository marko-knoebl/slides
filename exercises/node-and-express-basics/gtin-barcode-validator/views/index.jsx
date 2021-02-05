import React from "react";

export default () => {
  return (
    <html>
      <head>
        <title>GTIN (barcode) validator</title>
      </head>
      <body>
        <h1>GTIN (barcode) validator</h1>
        <form action="/validation" method="get">
          <input name="gtin" />
          <button type="submit">validate</button>
        </form>
      </body>
    </html>
  );
};
