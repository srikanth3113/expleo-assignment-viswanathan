import React from "react";
import { Button } from "@mui/material";

export const CustomButton = (props) => {
  const {
    label,
    className,
    onClick,
    type,
    color,
    startIcon,
    variant,
    isViewMode,
    style,
  } = props;

  return (
    <>
      <Button
        variant={variant}
        className={className}
        onClick={onClick}
        type={type}
        sx={{ ...style }}
        color={color}
        startIcon={startIcon}
        disabled={isViewMode}
      >
        {label}
      </Button>
    </>
  );
};