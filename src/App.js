import React, { useState } from "react";
import ActionsDone from "./components/ActionsDone";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

let initialActions = [];

function App() {
  const [activity, setActivity] = useState([]);
  const [actions, setActions] = useState(initialActions); //action

  // const onAddActivity = (e) => {
  //   e.preventDefault();

  //   setActivity([
  //     ...activity,
  //     {
  //       action: actions,
  //       traits: taits,
  //     },
  //   ]);
  // };

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
