import React, { useState } from "react";

const countries = [
  { id: "ru", name: "Russia", regex: "\\d{6}" },
  { id: "us", name: "Unites States", regex: "\\d{5}" },
  { id: "jp", name: "Japan", regex: "\\d{3}-\\d{4}" }
];

const ValidatedPostcodeInput = () => {
  const [countryId, setCountryId] = useState(countries[0].id);
  const [postcode, setPostcode] = useState("");

  const selectedCountry = countries.find(country => country.id === countryId);

  const valid = postcode.match(selectedCountry.regex);

  return (
    <form className={!valid && "invalid"}>
      <div>
        <select
          value={countryId}
          onChange={event => {
            setCountryId(event.target.value);
          }}
        >
          {countries.map(country => (
            <option value={country.id}>{country.name}</option>
          ))}
        </select>
        <input
          value={postcode}
          onChange={event => {
            setPostcode(event.target.value);
          }}
        />
      </div>
      <button disabled={!valid}>submit</button>
    </form>
  );
};

export default ValidatedPostcodeInput;
