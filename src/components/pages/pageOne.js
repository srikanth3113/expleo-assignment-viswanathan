import React from 'react'
import Footer from "../constants/footer"
import Header from '../constants/header'
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme"
import { styled } from "@mui/system";
import { Box } from '@mui/material';


const FormContainer = styled(Box)(({ theme }) => {
    return {
        width: "45%",
        // height: "calc(100vh - 66px)",
        height: "200px",
        background: "#FFFFFF",
        border: `1px solid ${theme.palette.secondary.light}`,
        borderRadius: "8px",
        margin: "auto",
        display: "flex",
        alignItems: "center",
    };
});
function pageOne() {
    return (
        <ThemeProvider theme={theme}>

            <Header />
            <FormContainer>
                <div>pageOneaslkdhaslkdjlaskjdlaksjdlaskjdlaskjdlashdkjasdlhajkgjd;ahksjlhvdksakhkasjl</div>
            </FormContainer>

            <Footer />

        </ThemeProvider>
    )
}

export default pageOne