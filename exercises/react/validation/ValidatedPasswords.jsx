import React, { useState } from "react";

const ValidatedPassword = () => {
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");

  const valid = pw1.length >= 4 && pw1 === pw2;

  return (
    <form style={{ backgroundColor: valid ? "blue" : "red" }}>
      <input value={pw1} onChange={event => setPw1(event.target.value)} />
      <input value={pw2} onChange={event => setPw2(event.target.value)} />
      <button disabled={!valid}>Change password</button>
    </form>
  );
};

export default ValidatedPassword;
