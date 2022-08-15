import React from 'react'
import "../../styles/toggle.css"
function customToggleButton({ buttonVal, setButtonval }) {

  return (
    <div class="toggleContainer">
      <fieldset>
        <div class="toggle">
          <input type="radio" name="sizeBy" value="weight" id="sizeWeight" checked={!buttonVal} onChange={(event) => {
            setButtonval(!buttonVal)
          }} />
          <label for="sizeWeight">Registration number</label>
          <input type="radio" name="sizeBy" value="dimensions" id="sizeDimensions" checked={buttonVal} onChange={(event) => {
            setButtonval(!buttonVal)
          }} />
          <label for="sizeDimensions">Postcode</label>
        </div>

      </fieldset>
    </div>
  )
}

export default customToggleButton