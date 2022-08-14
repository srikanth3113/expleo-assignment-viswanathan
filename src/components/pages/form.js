import React from 'react'
import { styled } from "@mui/system";
import { Box, Typography } from '@mui/material';
import CustomButton from "../shared/CustomButton";
import CustomTextField from "../shared/CustomTextField";

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const FormContainer = styled(Box)(({ theme }) => {
    return {
        width: "45%",
        // height: "calc(100vh - 66px)",
        height: "fit-content",
        background: "#FFFFFF",
        border: `1px solid ${theme.palette.secondary.light}`,
        borderRadius: "8px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        boxShadow: "0px 0 10px rgba(0, 0, 0, 0.8)"
    };
});
const InnerFormContainer = styled(Box)({
    // backgroundColor: "wheat"
});

const ButtonContainer = styled(Box)({
    height: "48px",
    width: "100%",
    backgroundColor: "white",
    color: "#7D8088 !important"

});
const ToggleContainer = styled(Box)({
    height: "48px",
    width: "100%",
    border: "1px solid red"

});
const RegistrationFormContainer = styled(Box)({
    height: "auto",
    width: "100%",
    backgroundColor: "blue",
});
const RegistrationHeader = styled(Box)({
    display: "flex",
    // fontWeight: "bold",
    justifyContent: "center",
    width: "100%",
});
const PostCodeFormContainer = styled(Box)({
    height: "auto",
    width: "100%",
    backgroundColor: "lightgrey",
});
const PostcodeHeader = styled(Box)({
    display: "flex",
    width: "100%",

});
const SwitchableFormContainer = styled(Box)({
    width: "100%",

});
function form() {
    return (
        <FormContainer>
            <InnerFormContainer>
                <Box>
                    <Typography variant="h6" gutterBottom component="div">
                        One more thing
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        What's your vehicle registration number or garaging postcode?
                    </Typography>
                    <ToggleContainer />
                </Box>

                <SwitchableFormContainer>
                    <RegistrationFormContainer >
                        <RegistrationHeader>
                            <Typography variant="h6" gutterBottom component="div">
                                What's your vehicle registration number?
                            </Typography>
                            <Tooltip title="Delete">
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </RegistrationHeader>
                        <CustomTextField label="Registration number" helperText="Some important hi how are you text" />
                    </RegistrationFormContainer>


                    <PostCodeFormContainer >
                        <PostcodeHeader>
                            <Typography variant="h6" gutterBottom component="div">
                                What's your postcode?
                            </Typography>
                            <Tooltip title="Delete">
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </PostcodeHeader>
                        <CustomTextField label="Postcode" helperText="Some important hi how are you text" />
                    </PostCodeFormContainer>
                </SwitchableFormContainer>
                <ButtonContainer >
                    <CustomButton label="Continue " />
                </ButtonContainer>
            </InnerFormContainer>
        </FormContainer>

    )
}

export default form