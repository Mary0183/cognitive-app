import React, { useState } from "react";
import ToggleButtonTraits from "./ToggleButtonTraits";
import "./Form.css";

const Form = (props) => {
  const [text, setText] = useState(""); //state called text (activities)
  const [traits, setTraits] = useState([]);
  const [niceTraits, setNiceTraits] = useState([]);
  const [happyTraits, setHappyTraits] = useState([]);
  const [braveTraits, setBraveTraits] = useState([]);
  const [smartTraits, setSmartTraits] = useState([]);

  function handleSmartTraits(values) {
    setSmartTraits(values);
    console.log(values);
  }
  function handleBraveTraits(values) {
    setBraveTraits(values);
    console.log(values);
  }

  function handleNiceTraits(values) {
    setNiceTraits(values);
    console.log(values);
  }

  function handleHappyTraits(values) {
    setHappyTraits(values);
    console.log(values);
  }
  function handleChange(values) {
    setTraits(values);
    console.log(values);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(text); //is defined by the parent
    setText("");
  };

  const handleInputChange = (event) => {
    let { name, value } = event.target; //name of the field and value of the field

    switch (name) {
      case "textInput":
        setText(value);
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
              name="textInput" // name should match the name case if not in won't update the state correctly
              type="text"
              value={text} //the value must match the state
              onChange={handleInputChange}
            ></input>
          </label>
        </form>
      </div>

      <ToggleButtonTraits
        onChange={(values) => handleChange(values)}
        handleNiceTraits={handleNiceTraits}
        handleHappyTraits={handleHappyTraits}
        handleBraveTraits={handleBraveTraits}
        handleSmartTraits={handleSmartTraits}
      />
    </>
  );
};

export default Form;
