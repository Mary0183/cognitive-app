import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Accordion from "./Accordion";

import "./UserActivityList.css";

function UserActivityList(props) {
  function toggle() {
    if (props.createUpdate === false) {
      return true;
    }
    return false;
  }
  let result = toggle();

  return (
    <>
      <div className="ActionsDone">
        <ul>
          {props.actions.map((action, index) => (
            <li key={index}>
              <Accordion
                title={action.action}
                children={action.traits}
              ></Accordion>

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
            </li>
          ))}
        </ul>
      </div>
      <div className="wrapper"></div>

      <button
        onClick={(result) => {
          props.onSubmit(result);
        }}
      >
        Add new
      </button>
    </>
  );
}
export default UserActivityList;
