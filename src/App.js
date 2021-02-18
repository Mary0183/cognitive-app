import React, { useState } from "react";
import UserActivityList from "./components/UserActivityList";
import CreateUpdateActivity from "./components/CreateUpdateActivity";
import Peacefulness from "./images/Peacefulness.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

let initialActions = [];
const initialFormState = { id: null, action: "" };

function App() {
  const [actions, setActions] = useState(initialActions); //keeps every action passed on the input fiel updated
  const [currentUpdate, setCurrentUpdate] = useState(initialFormState);
  const [updating, setUpdating] = useState(false);
  const [createUpdate, setCreateUpdate] = useState(true); //state that shows the "admin" side if it's true

  function addAction(action) {
    //adding an id to each action
    action.id = actions.length + 1;
    //I have to change the entire array in order for react to notice that something changed and to redraw if necessary
    setActions((actions) => [...actions, action]); // using spread operator to create a copy and append an action
    setCreateUpdate(false); // this state set to false will show the UserActivity component when add button is clicked
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
    setCreateUpdate(true); // this state set to true will show CreateActivity component when the pencil button is clicked. For the user to be able to edit
  };

  const updateActivity = (id, updatedActivity) => {
    setUpdating(false);

    setActions(
      actions.map((action) => (action.id === id ? updatedActivity : action))
    );
    setCurrentUpdate(initialFormState);
    setCreateUpdate(false); // this state set to false will show the UserActivity component when update button is clicked
  };

  const handleChangeView = (createUpdate) => {
    setCreateUpdate(createUpdate);
  };

  return (
    <div className="App">
      <h1>What made me feel good today...</h1>

      <div className="grid-img-art">
        <div className="layer-1">
          <img src={Peacefulness} alt="peacefulness art" />
        </div>

        <div className="layer-2">
          {/* onSubmit is expecting text that is passing from addAction */}
          {createUpdate && (
            <CreateUpdateActivity
              onSubmit={addAction}
              currentUpdate={currentUpdate}
              updating={updating}
              actions={actions}
              updateActivity={updateActivity}
            />
          )}

          <div>
            {!createUpdate && (
              <UserActivityList
                actions={actions}
                onRemove={(index) => removeAction(index)}
                editRow={editRow}
                currentUpdate={currentUpdate}
                onSubmit={(i) => handleChangeView(i)}
              />
            )}
            <div className="arrow-right">
              <h2>See List</h2>
              <FontAwesomeIcon
                className={!createUpdate ? "arrow-button" : "button"}
                icon={faAngleRight}
                onClick={() => handleChangeView(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
