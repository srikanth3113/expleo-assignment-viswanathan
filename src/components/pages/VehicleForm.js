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
        width: "40%",
        // height: "calc(100vh - 66px)",
        background: `#${theme.palette.secondary.main}`,
        border: `1px solid ${theme.palette.secondary.light}`,
        borderRadius: "8px",
        margin: "30px auto",
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        boxShadow: "0px 0 10px rgba(0, 0, 0, 0.8)",
        ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
            width: "80%",
            padding: "20px",

        }
    };
});
const InnerFormContainer = styled(Box)({
    // backgroundColor: "wheat"
});



const ButtonContainer = styled(Box)(({ theme }) => {
    return {
        marginTop: "8%",
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
    marginBottom: "10%"
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
const FormHeadingText = styled(Typography)(({ theme }) => {
    return {
        fontWeight: "bold",
        marginBottom: "0px",
        fontSize: "1.2rem",
        color: `${theme.palette.custom.main} !important`
    };
});

const FormBodyText = styled(Typography)(({ theme }) => {
    return {
        width: "95%",
        margin: "auto",
        fontWeight: "400",
        color: `${theme.palette.custom.main} !important`,
        ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: "18px"
        }
    };
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
const VehicleForm = () => {
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
    console.log('formik: ', formik);

    return (

        <FormContainer>
            <InnerFormContainer>
                <Box>
                    <FormHeadingText variant="h6" gutterBottom component="div">
                        One more thing
                    </FormHeadingText>
                    <FormBodyText variant="h6" gutterBottom component="div">
                        What's your vehicle registration number or garaging postcode?
                    </FormBodyText>
                    <ToggleContainer>
                        <Toggle buttonVal={buttonVal} setButtonval={setButtonval} />
                    </ToggleContainer>
                </Box>

                <SwitchableFormContainer>
                    {!buttonVal ? <RegistrationFormContainer >
                        <RegistrationHeader>
                            <FormHeadingText variant="h6"
                                type="number"
                                name="registrationNumber"
                                component="div">
                                What's your vehicle registration number?
                            </FormHeadingText>
                            <Tooltip title="registration number">
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </RegistrationHeader>
                        <CustomTextField label="Registration number"
                            id="registrationNumber"
                            name="registrationNumber"
                            type="number"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            error={formik.errors.registrationNumber}
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
                            <Tooltip title="postcode">
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </PostcodeHeader>
                        <CustomTextField label="Postcode"
                            id="Postcode"
                            name="Postcode"
                            type="number"
                            onBlur={formik.handleBlur}
                            error={formik.errors.Postcode}
                            onChange={formik.handleChange}
                            value={formik.values.Postcode}
                            helperText="Please enter the postcode where your car is garaged" />
                        {formik.errors.Postcode ?
                            <div>{formik.errors.Postcode}</div> : null}
                    </PostCodeFormContainer>}

                </SwitchableFormContainer>
                <ButtonContainer >
                    <CustomButton label="Continue" onClick={formik.handleSubmit} />
                </ButtonContainer>
            </InnerFormContainer>
        </FormContainer >

    )
}

export default VehicleForm