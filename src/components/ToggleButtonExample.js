import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

function ToggleButtonExample() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <ButtonGroup toggle className="mb-2">
        <ToggleButton
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
      <br />
    </>
  );
}

export default ToggleButtonExample;
