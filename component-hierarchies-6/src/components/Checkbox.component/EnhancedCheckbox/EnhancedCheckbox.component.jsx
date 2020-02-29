import React from "react";
import style from "./EnhancedCheckbox.module.css";
import propTypes from "prop-types";
export default function EnhancedCheckbox({
  label,
  value,
  selected,
  id,
  onChangeHandler
}) {
  return (
    <div
      onClick={() => onChangeHandler()}
      className={
        selected
          ? style.enhancedCheckboxContainerSelected
          : style.enhancedCheckboxContainer
      }
    >
      <input
        type="checkbox"
        id={id}
        selected={selected}
        value={value}
        onChange={() => ""} // => To prevent warning. onChange() is required if we are using checked attribute on our element.
        checked={selected}
      />
      <label>{label}</label>
    </div>
  );
}

EnhancedCheckbox.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  selected: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
  onChangeHandler: propTypes.func.isRequired
};
