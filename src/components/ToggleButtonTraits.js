import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./ToggleButtonTraits.css";

function ToggleButtonTraits(props) {
  return (
    <>
      <div>
        <form className="proj-grid">
          <div>
            <p>Nice</p>
            <ToggleButtonGroup
              type="checkbox"
              name="nice"
              vertical="false"
              onChange={props.onChange}
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
              <ToggleButton
                className="positive-traits nice"
                value={"thougtful"}
              >
                Thougtful
              </ToggleButton>
            </ToggleButtonGroup>

            {/*<Button type="submit">Submit</Button>*/}
          </div>

          <div>
            <p>Happy</p>
            <ToggleButtonGroup
              type="checkbox"
              name="happy"
              vertical="false"
              onChange={props.onChange}
            >
              <ToggleButton
                className="positive-traits happy"
                value={"cheerful"}
              >
                Cheerful
              </ToggleButton>
              <ToggleButton className="positive-traits happy" value={"pleased"}>
                Pleased
              </ToggleButton>
              <ToggleButton className="positive-traits happy" value={"joyful"}>
                Joyful
              </ToggleButton>
              <ToggleButton
                className="positive-traits happy"
                value={"satisfied"}
              >
                Satisfied
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div>
            <p>Brave</p>
            <ToggleButtonGroup
              type="checkbox"
              name="brave"
              vertical="false"
              onChange={props.onChange}
              vertical="false"
            >
              <ToggleButton
                className="positive-traits brave"
                value={"fearless"}
              >
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
              <ToggleButton
                className="positive-traits brave"
                value={"confident"}
              >
                Confident
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div>
            <p>Smart</p>
            <ToggleButtonGroup
              type="checkbox"
              name="smart"
              vertical="false"
              onChange={props.onChange}
              vertical="false"
            >
              <ToggleButton className="positive-traits smart" value={"wise"}>
                Wise
              </ToggleButton>
              <ToggleButton className="positive-traits smart" value={"clever"}>
                Clever
              </ToggleButton>
              <ToggleButton
                className="positive-traits smart"
                value={"creative"}
              >
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
        </form>
      </div>
    </>
  );
}

export default ToggleButtonTraits;
