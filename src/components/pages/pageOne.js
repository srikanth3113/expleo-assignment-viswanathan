import React from 'react'
import Footer from "../constants/footer"
import Topbar from '../constants/topBar'
import VehicleForm from "./VehicleForm"
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme"




function pageOne() {
    return (
        <ThemeProvider theme={theme}>
            <Topbar />
            <VehicleForm />
            <Footer />
        </ThemeProvider>
    )
}

export default pageOne