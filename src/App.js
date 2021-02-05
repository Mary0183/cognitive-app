import React, { useState } from "react";
import ActionsDone from "./components/ActionsDone";
import Form from "./components/Form";
import "./App.css";

let initialActions = [
  { text: "Called mom" },
  { text: "Helped my elderly neighbors" },
  { text: "Donated to charity" },
  { text: "Drank enough water" },
];

function App() {
  const [actions, setActions] = useState(initialActions);

  function addAction(text) {
    //this is coming up from the Form to the App
    //I have to change the entire array in order for react to notice that something changed and to redraw if necessary
    let newAction = { text };
    setActions((actions) => [...actions, newAction]); //here the entire array is replaced
  }

  function removeAction(indexToFilter) {
    const newList = actions.filter((action, index) => index !== indexToFilter);
    setActions(newList);
  }

  return (
    <div className="App">
      <h1>What made me feel good today...</h1>

      {/* onSubmit is expecting text that is passing from addItem */}
      <Form onSubmit={(text) => addAction(text)} />

      <ActionsDone
        actions={actions}
        onRemove={(index) => removeAction(index)}
      />
    </div>
  );
}

export default App;
