import React from "react";
import "./editable.css";
export default function EditableInput({
  isPdf,
  handleChange,
  inputKey,
  value,
  name,
  type,
  heading,
}) {
  return (
    <>
      {isPdf ? (
        "pdf view"
      ) : (
        <input
          className={heading ? "customInputHeading" : "customInput"}
          onChange={(e) => handleChange(inputKey, e.target.value)}
          value={value}
          placeholder={name}
          type={type}
        />
      )}
    </>
  );
}
