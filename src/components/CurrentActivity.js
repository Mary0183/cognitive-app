import React, { useState, useEffect } from "react";
import ToggleButtonTraits from "./ToggleButtonTraits";
import Button from "react-bootstrap/Button";

import "./CurrentActivity.css";

const emptyTraitArray = {
  nice: [],
  happy: [],
  brave: [],
  smart: [],
};

const CurrentActivity = (props) => {
  // Set initial data to optional 'data' props, if passed, else empty
  let initialData = props.data || emptyTraitArray;

  let showCurrentUpdt = props.currentUpdate.action; //edit mode
  let showCurrentTraitUpdt = props.currentUpdate.traits; //edit mode

  const [activity, setActivity] = useState("");

  const [traits, setTraits] = useState(initialData);

  //edit mode
  useEffect(() => {
    setActivity(showCurrentUpdt);
    setTraits(showCurrentTraitUpdt || emptyTraitArray); //if traits are being selected show them or don't
  }, [props]);

  function handleChange(values, event) {
    let groupName = event.target.name;
    setTraits((data) => {
      return { ...data, [groupName]: values }; //adds a key to traits object with the selected values
    });
  }

  // handleSubmit is handling the data submitted after writting an action and selecting traits when the button is clicked
  const handleSubmit = (event) => {
    event.preventDefault();

    if (traits === emptyTraitArray) {
      alert("Choose some traits and try again.");
      // setShow("Please fill action and traits");
    } else {
      //onSubmit props comes from the parent component and does reference to addAction function
      props.onSubmit({
        action: activity,
        traits: traits,
      });
      setActivity("");
      setTraits(emptyTraitArray);
    }
  };

  const handleInputChange = (event) => {
    let { name, value } = event.target; //name of the field and value of the field
    if (name === "actionInput") {
      setActivity(value); //value is the activity passed in the input field
    }
  };

  return (
    <>
      <div className="Form">
        <h1>
          Write actions you did today that made you feel a positive way about
          yourself...
        </h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="proj-grid-form">
            <div className="grid-input">
              <label htmlFor="action">
                <input
                  className="form-control"
                  name="actionInput"
                  type="text"
                  value={activity}
                  onChange={handleInputChange}
                  required
                ></input>
              </label>
              {/* if updating is not true show Update button*/}
              {!props.updating && (
                <Button variant="light" type="submit">
                  Add
                </Button>
              )}
              {/* if updating is true show Update button*/}
              {props.updating && (
                <Button
                  variant="light"
                  onClick={() => {
                    props.updateActivity(props.currentUpdate.id, {
                      action: activity,
                      traits: traits,
                    });
                    setActivity("");
                    setTraits(emptyTraitArray);
                  }}
                >
                  Update
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>

      <ToggleButtonTraits
        onChange={handleChange}
        onSubmit={handleSubmit}
        traits={traits}
      />
    </>
  );
};

export default CurrentActivity;
