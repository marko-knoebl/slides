import React from "react";

const styles = {
  active: { color: "gold" },
  inactive: { color: "lightgrey" }
};

const Rating = props => {
  const starIds = [1, 2, 3, 4, 5];
  const starData = starIds.map(id => ({
    id: id,
    active: id <= props.stars
  }));
  return (
    <div>
      {starData.map(star => (
        <span
          style={star.active ? styles.active : styles.inactive}
          onClick={() => {
            props.onChange && props.onChange(star.id);
          }}
        >
          {star.active ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default Rating;
