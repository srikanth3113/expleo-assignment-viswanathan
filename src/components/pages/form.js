import React, { useState } from 'react'
import { styled } from "@mui/system";
import { useFormik } from 'formik'
import * as Yup from "yup";
import { Box, Typography } from '@mui/material';
import CustomButton from "../shared/CustomButton";
import CustomTextField from "../shared/CustomTextField";
import Toggle from "../shared/customToggleButton"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const FormContainer = styled(Box)(({ theme }) => {
    return {
        width: "45%",
        // height: "calc(100vh - 66px)",

        background: `#${theme.palette.secondary.main}`,
        border: `1px solid ${theme.palette.secondary.light}`,
        borderRadius: "8px",
        margin: "30px auto",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        boxShadow: "0px 0 10px rgba(0, 0, 0, 0.8)"
    };
});
const InnerFormContainer = styled(Box)({
    // backgroundColor: "wheat"
});



const ButtonContainer = styled(Box)(({ theme }) => {
    return {
        height: "48px",
        width: "100%",
        backgroundColor: "white",
        color: `#${theme.palette.button.main} !important`
    };
});

const ToggleContainer = styled(Box)({
    height: "fit-content",
    width: "100%",
    display: "flex",
    justifyContent: "center",

});
const RegistrationFormContainer = styled(Box)({
    height: "auto",
    width: "100%",
});
const RegistrationHeader = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
});
const RegistrationHeadingText = styled(Typography)({
    fontWeight: "bold",
    marginBottom: "0px"
});

const PostCodeFormContainer = styled(Box)({
    height: "auto",
    width: "100%",
});
const PostcodeHeader = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

});
const PostcodeHeadingText = styled(Typography)({
    fontWeight: "bold",
});
const SwitchableFormContainer = styled(Box)({
    width: "100%",

});
const Form = () => {
    // function Form() {
    const [buttonVal, setButtonval] = useState(false);

    const initialValues = {
        registrationNumber: "",
        postCode: ""
    };

    const validationSchema = Yup.object({
        registrationNumber: Yup.number().required(),
        postCode: Yup.number().required(),
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormContainer>
                <InnerFormContainer>
                    <Box>
                        <Typography variant="h6" gutterBottom component="div">
                            One more thing
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            What's your vehicle registration number or garaging postcode?
                        </Typography>
                        <ToggleContainer>
                            <Toggle buttonVal={buttonVal} setButtonval={setButtonval} />
                        </ToggleContainer>
                    </Box>

                    <SwitchableFormContainer>
                        {!buttonVal ? <RegistrationFormContainer >
                            <RegistrationHeader>
                                <RegistrationHeadingText variant="h6"
                                    type="number"
                                    name="registrationNumber"
                                    component="div">
                                    What's your vehicle registration number?
                                </RegistrationHeadingText>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </RegistrationHeader>
                            <CustomTextField label="Registration number"
                                id="registrationNumber"
                                name="registrationNumber"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.registrationNumber}
                                helperText="Please enter the registration of the insured vehicle" />
                            {formik.errors.registrationNumber ?
                                <div>{formik.errors.registrationNumber}</div> : null}
                        </RegistrationFormContainer> : <PostCodeFormContainer >
                            <PostcodeHeader>
                                <PostcodeHeadingText variant="h6"
                                    type="number"
                                    name="postCode"
                                    component="div">
                                    What's your postcode?
                                </PostcodeHeadingText>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </PostcodeHeader>
                            <CustomTextField label="Postcode"
                                id="Postcode"
                                name="Postcode"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.Postcode}
                                helperText="Please enter the postcode where your car is garaged" />
                            {formik.errors.Postcode ?
                                <div>{formik.errors.Postcode}</div> : null}
                        </PostCodeFormContainer>}

                    </SwitchableFormContainer>
                    <ButtonContainer >
                        <CustomButton label="Continue" type="submit" />
                    </ButtonContainer>
                </InnerFormContainer>
            </FormContainer >
        </Form>
    )
}

export default Form