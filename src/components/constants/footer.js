import { Box } from '@mui/material'
import React from 'react'
import Customlink from "../shared/CustomLink"
import { styled } from "@mui/system";

const StyledFooterContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "70px",
    padding: "10px",
    backgroundColor: "yellow",
    borderTop: "1px solid #202020",
    boxSizing: "border-box",
}));
function footer() {
    return (
        <StyledFooterContainer>
            <Customlink
                linktext="Terms and Conditions"
                linkPostion="flex-start"
                linkColor="#707070"
            />
        </StyledFooterContainer>

    )
}

export default footer