// https://codesandbox.io/s/validation-s46zf
import React, { useState } from "react";

const ValidatedPassword = () => {
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");

  const valid = pw1.length >= 4 && pw1 === pw2;

  return (
    <form
      style={{
        padding: "1em",
        borderStyle: "solid",
        borderWidth: "0.25em",
        borderColor: valid ? "lightblue" : "salmon",
      }}
    >
      <div>
        <label>
          new password:
          <input
            type="password"
            value={pw1}
            onChange={(event) => setPw1(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          repeat password:
          <input
            type="password"
            value={pw2}
            onChange={(event) => setPw2(event.target.value)}
          />
        </label>
      </div>
      <button disabled={!valid}>Change password</button>
    </form>
  );
};

export default ValidatedPassword;
