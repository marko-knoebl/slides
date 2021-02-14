// https://codesandbox.io/s/rating-n1nmu
import React from "react";

type Props = {
  value: number;
  onChange?: (value: number) => void;
};

const styles = {
  active: { color: "gold" },
  inactive: { color: "lightgrey" }
};

const Rating = (props: Props) => {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div style={{ userSelect: "none" }}>
      {starIds.map((id) => {
        const active = id <= props.value;
        return (
          <span
            style={active ? styles.active : styles.inactive}
            onClick={() => {
              // call .onChange if it exists
              props.onChange?.(id);
            }}
          >
            {active ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
