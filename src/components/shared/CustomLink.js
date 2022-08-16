/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";

import { Typography } from "@mui/material";
export default function CustomLink(props) {
  const {
    linktext,
    linkPostion,
    linkColor,
    href,
  } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        height: "100%",
        alignContent: "center",
        justifyContent: linkPostion,
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
      }}
    > 
      <Typography
        href={href ? href : "#"}
        sx={{
          color: linkColor,
          cursor: "pointer",
          textDecoration: "underline",
          ml: 3,
        }}
      >
        {linktext}
      </Typography>
    </Box>
  );
}
