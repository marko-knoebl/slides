// https://codesandbox.io/s/color-picker-65duy
import React, { useState } from "react";

// from https://clrs.cc/
const colors = [
  "001f3f",
  "0074D9",
  "7FDBFF",
  "39CCCC",
  "3D9970",
  "2ECC40",
  "01FF70",
  "FFDC00",
  "FF851B",
  "FF4136",
  "85144B",
  "F012BE",
  "B10DC9",
  "111111",
  "AAAAAA",
  "DDDDDD",
  "FFFFFF"
];

const isHexColor = (color: string) => /(\d|[a-f]){6}/i.test(color);

type ColoredSquareProps = {
  color: string;
  margin?: string | number;
  onClick?: () => void;
};
const ColoredSquare = ({ color, margin = 0, onClick }: ColoredSquareProps) => {
  return (
    <div
      style={{
        border: "1px solid grey",
        margin: margin,
        height: "1em",
        width: "1em",
        backgroundColor: "#" + color,
        boxSizing: "border-box"
      }}
      onClick={() => onClick?.()}
    ></div>
  );
};

type PickerPopupProps = {
  color: string;
  onChange: (color: string) => void;
  onClose: () => void;
};
const PickerPopup = ({ color, onChange, onClose }: PickerPopupProps) => {
  const [colorString, setColorString] = useState(color);
  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        width: "12em",
        position: "absolute",
        marginTop: "1em",
        padding: "0.25em"
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {colors.map((color) => (
          <ColoredSquare
            key={color}
            color={color}
            margin="0.25em"
            onClick={() => {
              onChange(color);
              setColorString(color);
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.25em"
        }}
      >
        <input
          size={6}
          value={colorString}
          onChange={(event) => {
            setColorString(event.target.value);
            if (isHexColor(event.target.value)) {
              onChange(event.target.value);
            }
          }}
        />
        <button onClick={() => onClose()}>close</button>
      </div>
    </div>
  );
};

type ColorPickerProps = {
  color: string;
  onChange: (value: string) => void;
};
const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const [showPopup, setShowPupup] = useState(false);
  return (
    <div style={{ display: "inline-flex", position: "relative" }}>
      <ColoredSquare
        color={color}
        onClick={() => {
          setShowPupup(!showPopup);
        }}
      />
      {showPopup ? (
        <PickerPopup
          color={color}
          onChange={onChange}
          onClose={() => setShowPupup(false)}
        />
      ) : null}
    </div>
  );
};

export default ColorPicker;
