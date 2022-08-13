import React from "react";
import TextField from "@mui/material/TextField";

export function CustomTextField(props) {
  const {
    type,
    name,
    onChange,
    error,
    helpertext,
    value,
    variant,
    onBlur,
    label,
    disabled,
    style,
    isViewMode,
    maxLength,
    fullWidth,
    fieldType,
    autoComplete,
    onkeydown,
    // className,
  } = props;

  const handleKeyPress = (e) => {
    if (fieldType === "mobile") {
      return !/[0-9+-]/.test(e.key) && e.preventDefault();
    }
    if (fieldType === "alphaNumeric") {
      return !/[0-9A-Za-z]/.test(e.key) && e.preventDefault();
    }
    if (type === "number") {
      return !/[0-9]/.test(e.key) && e.preventDefault();
    }
  };
  return (
    <>
      <TextField
        id="standard-basic"
        label={label}
        variant={variant ? variant : "outlined"}
        type={"text"}
        name={name}
        fullWidth={fullWidth}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        value={value || ""}
        error={Boolean(error)}
        helperText={helpertext || error}
        style={style}
        InputProps={{
          onKeyPress: (e) => handleKeyPress(e),
          onKeyDown: (e) => onkeydown && onkeydown(e),
          readOnly: isViewMode,
          disabled: disabled,
        }}
        onInput={(e) => {
          e.target.value &&
            maxLength &&
            (e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, maxLength));
        }}
      />
    </>
  );
}
