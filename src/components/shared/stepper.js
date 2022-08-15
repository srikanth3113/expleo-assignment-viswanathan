import React from 'react'
import { styled } from "@mui/system";
import { Box } from '@mui/material';
import "../../styles/stepper.css"

function stepper() {
    return (

        <div class="stepperContainer">
            <div class="step step-one">1
                <p>Confirm your details</p>
            </div>
            <div class="step2 step-two">2
                <p>Consent</p>
            </div>
        </div>

    )
}

export default stepper