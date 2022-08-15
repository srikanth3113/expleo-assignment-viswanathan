import React from 'react'
import Footer from "../constants/footer"
import Topbar from '../constants/topBar'
// import Form from "../pages/form"
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme"




function pageOne() {
    return (
        <ThemeProvider theme={theme}>

            <Topbar />
                {/* <Form /> */}
            <Footer />

        </ThemeProvider>
    )
}

export default pageOne