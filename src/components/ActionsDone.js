import React from "react";
import "./ActionsDone.css";

function ActionsDone(props) {
  return (
    <>
      <div className="ActionsDone">
        <ul>
          {props.actions.map((action, index) => (
            <li key={index}>
              {action.action}
              <button onClick={() => props.onRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ActionsDone;
