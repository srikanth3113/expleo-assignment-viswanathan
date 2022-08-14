import React from 'react'
import { Box } from '@mui/material'
import { styled } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Stepper from "../shared/stepper"
const StyledtopBarContainer = styled(Box)(({ theme }) => {
    return {
        width: "100%",
        height: "90px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#14284B",
        boxSizing: "border-box",
        border: `1px solid ${theme.palette.secondary.light}`,
        padding: "10px 24px 10px 24px"
    };
});
const StyledIconContainer = styled(Box)({
    height: "48px",
    width: "100px",
    backgroundColor: "#00AFF4"
});
const StyledCloseButton = styled(CloseIcon)(({ theme }) => {
    return {
        width: "70px",
        color: `${theme.palette.primary.light}`,
        fontSize: "35px",
        borderLeft: `0.5px solid ${theme.palette.primary.light}`
    };
});
const StyledNavigateBeforeButton = styled(NavigateBeforeIcon)(({ theme }) => {
    return {
        width: "70px",
        color: `${theme.palette.primary.light}`,
        fontSize: "35px",
        borderRight: `0.5px solid ${theme.palette.primary.light}`
    };
});



export default function topBar() {
    return (
        <StyledtopBarContainer>
            <StyledIconContainer />
            <Stepper />
            <Box>
                <StyledNavigateBeforeButton />
                <StyledCloseButton />
            </Box>

        </StyledtopBarContainer>
    )
}








