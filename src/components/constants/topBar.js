import React from 'react'
import { Box } from '@mui/material'
import { styled } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Stepper from "../shared/stepper"
import MobileStepper from "../shared/mobileStepper"
const StyledtopBarContainer = styled(Box)(({ theme }) => {
    return {
        width: "100%",
        height: "90px",
        backgroundColor: `${theme.palette.templateTheme.main}`,
        boxSizing: "border-box",
        border: `1px solid ${theme.palette.secondary.light}`,
        padding: "0px 24px 10px 24px",
        ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
            padding: "0px 14px 0px 14px",
            height: "120px",
        }
    };
});
const DesktopTopbarContainer = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

});


const StyledIconContainer = styled(Box)(({ theme }) => {
    return {
        height: "48px",
        width: "100px",
        color: `${theme.palette.primary.light}`,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        fontSize: "32px",
        fontWeight: "bold",
        ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
            width: "95%",
            fontSize: "35px",
            padding: "0 0 0 30px",

        }
    };
});

const StyledStepperContainer = styled(Box)({
    height: "90px",
    zIndex: "10",
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
        display: "none",

    }
});
const MobileStepperContainer = styled(Box)({
    display: "none",
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
        display: "block",
        width: "100%"
    }
});


const StyledCloseButton = styled(CloseIcon)(({ theme }) => {
    return {
        width: "70px",
        color: `${theme.palette.primary.light}`,
        fontSize: "35px",
        // borderLeft: `0.2px solid ${theme.palette.primary.light}`
        ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
            width: "35px",
        }
    };
});
const StyledNavigateBeforeButton = styled(NavigateBeforeIcon)(({ theme }) => {
    return {
        width: "70px",
        color: `${theme.palette.primary.light}`,
        fontSize: "35px",
        borderRight: `0.2px solid ${theme.palette.primary.light}`,
        ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
            display: "none"
        }
    };
});



export default function topBar() {
    return (
        <StyledtopBarContainer>
            <DesktopTopbarContainer>
                <StyledIconContainer >
                    QBE
                </StyledIconContainer>
                <StyledStepperContainer>
                    <Stepper />
                </StyledStepperContainer>
                <Box>
                    <StyledNavigateBeforeButton />
                    <StyledCloseButton />
                </Box>
            </DesktopTopbarContainer>
            <MobileStepperContainer>
                <MobileStepper />
            </MobileStepperContainer>
        </StyledtopBarContainer>
    )
}








