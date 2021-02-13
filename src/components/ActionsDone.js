import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

// import { Accordion, Card, Button } from "react-bootstrap";

import "./ActionsDone.css";

function ActionsDone(props) {
  return (
    <>
      <div className="ActionsDone">
        <ul>
          {props.actions.map((action, index) => (
            <li key={index}>
              {action.action}
              <FontAwesomeIcon
                className="remove-button"
                icon={faTimesCircle}
                onClick={() => props.onRemove(index)}
              />
              <FontAwesomeIcon
                className="edit-button"
                icon={faPencilAlt}
                onClick={() => {
                  props.editRow(action, action.traits);
                }}
              />
              {
                <>
                  <ul>
                    {action.traits.nice.map((trait) => (
                      <li>{trait}</li>
                    ))}
                  </ul>
                  <ul>
                    {action.traits.happy.map((trait) => (
                      <li>{trait}</li>
                    ))}
                  </ul>
                  <ul>
                    {action.traits.brave.map((trait) => (
                      <li>{trait}</li>
                    ))}
                  </ul>
                  <ul>
                    {action.traits.smart.map((trait) => (
                      <li>{trait}</li>
                    ))}
                  </ul>
                </>
              }
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ActionsDone;
