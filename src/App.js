import React, { useState } from "react";
import ActionsDone from "./components/ActionsDone";
import Form from "./components/Form";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

let initialActions = [];
const initialFormState = { id: null, action: "" };

function App() {
  const [actions, setActions] = useState(initialActions); //keeps every action passed on the input fiel updated
  const [currentUpdate, setCurrentUpdate] = useState(initialFormState);
  const [updating, setUpdating] = useState(false);

  function addAction(action) {
    //adding an id to each action
    action.id = actions.length + 1;
    //I have to change the entire array in order for react to notice that something changed and to redraw if necessary
    setActions((actions) => [...actions, action]); // using spread operator to create a copy and append an action
  }

  function removeAction(indexToFilter) {
    const newList = actions.filter((action, index) => index !== indexToFilter);
    setActions(newList);
  }

  const editRow = (action) => {
    setUpdating(true);

    setCurrentUpdate({
      id: action.id,
      action: action.action,
      traits: action.traits,
    });
  };

  return (
    <div className="App">
      <h1>What made me feel good today...</h1>

      {/* onSubmit is expecting text that is passing from addAction */}
      <Form onSubmit={addAction} currentUpdate={currentUpdate} />

      <ActionsDone
        actions={actions}
        onRemove={(index) => removeAction(index)}
        editRow={editRow}
        currentUpdate={currentUpdate}
      />
    </div>
  );
}

export default App;
