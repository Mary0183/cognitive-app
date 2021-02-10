import React, { useState } from "react";
import ToggleButtonTraits from "./ToggleButtonTraits";
import "./Form.css";

const emptyTraitArray = {
  nice: [],
  happy: [],
  brave: [],
  smart: [],
};
const Form = (props) => {
  // Set initial data to optional 'data' props, if passed, else empty
  let initialData = props.data || emptyTraitArray;

  const [activity, setActivity] = useState("");
  const [traits, setTraits] = useState(initialData);

  function handleChange(values, event) {
    let groupName = event.target.name;
    setTraits((data) => {
      return { ...data, [groupName]: values };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      action: activity,
      traits: traits,
    });
    setActivity("");
  };

  const handleInputChange = (event) => {
    let { name, value } = event.target; //name of the field and value of the field

    switch (name) {
      case "actionInput":
        setActivity(value);
      default:
        break;
    }
  };
  return (
    <>
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="action">
            <input
              name="actionInput" // name should match the name case if not in won't update the state correctly
              type="text"
              value={activity} //the value must match the state
              onChange={handleInputChange}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      <ToggleButtonTraits
        onChange={handleChange}
        onSubmit={handleSubmit}

        //   handleNiceTraits={handleNiceTraits}
        //   handleHappyTraits={handleHappyTraits}
        //   handleBraveTraits={handleBraveTraits}
        //   handleSmartTraits={handleSmartTraits}
      />
    </>
  );
};

export default Form;
