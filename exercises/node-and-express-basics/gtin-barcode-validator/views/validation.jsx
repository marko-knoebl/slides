import { isValid, isGTIN } from "gtin";
import React from "react";

export default ({ gtin }) => {
  let result;
  if (!isGTIN(gtin)) {
    result = "not well-formed";
  } else {
    result = isValid(gtin) ? "valid" : "not valid";
  }
  return (
    <html>
      <head>
        <title>GTIN (barcode) validator</title>
      </head>
      <body>
        <h1>validation result</h1>
        <p>
          The GTIN <i>{gtin}</i> is <b>{result}</b>.
        </p>
        <p>
          <a href="/">back</a>
        </p>
      </body>
    </html>
  );
};
