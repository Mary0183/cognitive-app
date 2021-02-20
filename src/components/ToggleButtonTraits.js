import React from "react";
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
              onSubmit={props.onSubmit}
              value={props.traits.nice}
            >
              <ToggleButton className="positive-traits nice" value={"Helpful"}>
                Helpful
              </ToggleButton>
              <ToggleButton className="positive-traits nice" value={"Friendly"}>
                Friendly
              </ToggleButton>
              <ToggleButton
                className="positive-traits nice"
                value={"Compassionate"}
              >
                Compassionate
              </ToggleButton>
              <ToggleButton
                className="positive-traits nice"
                value={"Thougtful"}
              >
                Thougtful
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div>
            <p>Happy</p>
            <ToggleButtonGroup
              type="checkbox"
              name="happy"
              vertical="false"
              onChange={props.onChange}
              onSubmit={props.onSubmit}
              value={props.traits.happy}
            >
              <ToggleButton
                className="positive-traits happy"
                value={"Cheerful"}
              >
                Cheerful
              </ToggleButton>
              <ToggleButton className="positive-traits happy" value={"Pleased"}>
                Pleased
              </ToggleButton>
              <ToggleButton className="positive-traits happy" value={"Joyful"}>
                Joyful
              </ToggleButton>
              <ToggleButton
                className="positive-traits happy"
                value={"Satisfied"}
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
              onSubmit={props.onSubmit}
              value={props.traits.brave}
            >
              <ToggleButton
                className="positive-traits brave"
                value={"Fearless"}
              >
                Fearless
              </ToggleButton>
              <ToggleButton
                className="positive-traits brave-traits brave"
                value={"Adventurous"}
              >
                Adventurous
              </ToggleButton>
              <ToggleButton className="positive-traits brave" value={"Daring"}>
                Daring
              </ToggleButton>
              <ToggleButton
                className="positive-traits brave"
                value={"Confident"}
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
              onSubmit={props.onSubmit}
              value={props.traits.smart}
            >
              <ToggleButton className="positive-traits smart" value={"Wise"}>
                Wise
              </ToggleButton>
              <ToggleButton className="positive-traits smart" value={"Clever"}>
                Clever
              </ToggleButton>
              <ToggleButton
                className="positive-traits smart"
                value={"Creative"}
              >
                Creative
              </ToggleButton>
              <ToggleButton
                className="positive-traits smart"
                value={"Independent"}
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
