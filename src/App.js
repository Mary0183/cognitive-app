import React, { useState } from "react";
import ActionsDone from "./components/ActionsDone";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

let initialActions = [];

function App() {
  const [actions, setActions] = useState(initialActions); //action

  function addAction(action) {
    //I have to change the entire array in order for react to notice that something changed and to redraw if necessary
    setActions((actions) => [...actions, action]); //here the entire array is replaced
  }

  function removeAction(indexToFilter) {
    const newList = actions.filter((action, index) => index !== indexToFilter);
    setActions(newList);
  }

  return (
    <div className="App">
      <h1>What made me feel good today...</h1>

      <ActionsDone
        actions={actions}
        onRemove={(index) => removeAction(index)}
      />
      {/* onSubmit is expecting text that is passing from addAction */}
      <Form onSubmit={addAction} />
    </div>
  );
}

export default App;
