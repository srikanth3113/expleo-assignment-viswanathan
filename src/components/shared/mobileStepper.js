import React from 'react'
import "../../styles/mobleStepper.css"
function mobileStepper() {
    return (
        <div class="mobilestepperContainer">
            <div class="stepperHeadingContainer">
                <p>Confirm your details</p>
                <p>1 of 2</p>
            </div>
            <div class="pageIndicatorContainer">
                <div class="leftIndicator" />
                <div class="rightIndicator" />
            </div>

        </div>
    )
}

export default mobileStepper