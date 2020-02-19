import React from "react";
import propTypes from "prop-types";
import "./Square.css";

export default function SimpleSquare({ size, color }) {
  const sizeWithPx = `${size}px`;
  const style = {
    width: sizeWithPx,
    height: sizeWithPx,
    backgroundColor: color
  };
  return (
    <div>
      <div style={style} className="Square"></div>
    </div>
  );
}

SimpleSquare.propTypes = {
  color: propTypes.string.isRequired,
  size: propTypes.number.isRequired
};

SimpleSquare.defaultProps = {
  color: "yellow"
};




