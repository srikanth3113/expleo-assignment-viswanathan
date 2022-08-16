import React from "react";
import { Button } from "@mui/material";


export const CustomButton = (props) => {

  const {
    color,
    label,
    variant = "text",
    type,
    onClick,
    isViewMode = false,
  } = props;

  return (
    <div
      style={{
        height: "100%",
        width: "25%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
        backgroundColor: "#F7F8F9",

      }}
    >
      <Button
        variant={variant}
        onClick={onClick}
        type={type || "submit"}
        color={color}
        disabled={isViewMode}
      >
        {label}
      </Button>
    </div>
  );
};

export default CustomButton;