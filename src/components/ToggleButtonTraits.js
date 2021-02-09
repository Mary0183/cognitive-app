import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./ToggleButtonTraits.css";

function ToggleButtonTraits(props) {
  return (
    <>
      <div className="proj-grid">
        <div>
          <p>Nice</p>
          <ToggleButtonGroup
            onChange={(values) => {
              console.log(values);

              props.handleNiceTraits(values);
            }}
            type="checkbox"
            name="traits"
            vertical="false"
          >
            <ToggleButton className="positive-traits nice" value={"helpful"}>
              Helpful
            </ToggleButton>
            <ToggleButton className="positive-traits nice" value={"friendly"}>
              Friendly
            </ToggleButton>
            <ToggleButton
              className="positive-traits nice"
              value={"compassionate"}
            >
              Compassionate
            </ToggleButton>
            <ToggleButton className="positive-traits nice" value={"thougtful"}>
              Thougtful
            </ToggleButton>
          </ToggleButtonGroup>

          {/*<Button type="submit">Submit</Button>*/}
        </div>

        <div>
          <p>Happy</p>
          <ToggleButtonGroup
            onChange={(values) => {
              props.onChange(values);
            }}
            type="checkbox"
            name="traits"
            vertical="false"
          >
            <ToggleButton className="positive-traits happy" value={"cheerful"}>
              Cheerful
            </ToggleButton>
            <ToggleButton className="positive-traits happy" value={"pleased"}>
              Pleased
            </ToggleButton>
            <ToggleButton className="positive-traits happy" value={"joyful"}>
              Joyful
            </ToggleButton>
            <ToggleButton className="positive-traits happy" value={"satisfied"}>
              Satisfied
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div>
          <p>Brave</p>
          <ToggleButtonGroup
            onChange={(values) => {
              console.log(values);
            }}
            type="checkbox"
            name="traits"
            vertical="false"
          >
            <ToggleButton className="positive-traits brave" value={"fearless"}>
              Fearless
            </ToggleButton>
            <ToggleButton
              className="positive-traits brave-traits brave"
              value={"adventurous"}
            >
              Adventurous
            </ToggleButton>
            <ToggleButton className="positive-traits brave" value={"daring"}>
              Daring
            </ToggleButton>
            <ToggleButton className="positive-traits brave" value={"confident"}>
              Confident
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div>
          <p>Smart</p>
          <ToggleButtonGroup
            onChange={(values) => {
              console.log(values);
            }}
            type="checkbox"
            name="traits"
            vertical="false"
          >
            <ToggleButton className="positive-traits smart" value={"Wise"}>
              Wise
            </ToggleButton>
            <ToggleButton className="positive-traits smart" value={"Clever"}>
              Clever
            </ToggleButton>
            <ToggleButton className="positive-traits smart" value={"Creative"}>
              Creative
            </ToggleButton>
            <ToggleButton
              className="positive-traits smart"
              value={"independent"}
            >
              Independent
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <button id="submit-button">Submit</button>
      </div>
    </>
  );
}

export default ToggleButtonTraits;
