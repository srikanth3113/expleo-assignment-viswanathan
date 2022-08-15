import React from 'react'
import "../../styles/toggle.css"
function customToggleButton() {
  return (
    <div class="toggleContainer">
    <fieldset>
  <div class="toggle">
    <input type="radio" name="sizeBy" value="weight" id="sizeWeight" checked="checked" />
    <label for="sizeWeight">Registration number</label>
    <input type="radio" name="sizeBy" value="dimensions" id="sizeDimensions" />
    <label for="sizeDimensions">Postcode</label>
  </div>

</fieldset>
</div>
  )
}

export default customToggleButton