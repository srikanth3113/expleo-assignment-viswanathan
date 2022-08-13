import React from 'react'
import { Box } from '@mui/material'
import { styled } from "@mui/system";


const StyledHeaderContainer = styled(Box)(({ theme }) => {
    return {
        width: "100%",
        height: "70px",
        display:"flex",
        justifyContent:"space-between",
        padding: "10px",
        backgroundColor: "#14284B",
        boxSizing: "border-box",
        border: `1px solid ${theme.palette.secondary.light}`,
    };
});
export default function header() {
    return (
        <StyledHeaderContainer>
            <Box>abc</Box>
            <Box>123</Box>
            <Box>abc</Box>

            </StyledHeaderContainer>
    )
}








