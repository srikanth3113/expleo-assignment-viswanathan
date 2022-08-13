/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";

// import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
// const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
export default function CustomLink(props) {
  // const navigate = useNavigate();
  const {
    linktext,
    linkPostion,
    linkColor,
    href,
    // listPath,
    // onClick,
    // className, 
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
    //   onClick={preventDefault}
    > 
      <Typography
        href={href ? href : "#"}
        // onClick={onClick ? onClick : () => navigate(listPath)}
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
