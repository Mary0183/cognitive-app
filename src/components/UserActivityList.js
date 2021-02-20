import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
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
            <li key={index} className="grid-accordion-edit-remove">
              <div>
                <Accordion
                  title={action.action}
                  children={action.traits}
                ></Accordion>
              </div>

              <div>
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
              </div>
            </li>
          ))}
        </ul>
        <div className="grid-left-arrow-button">
          <div className="go-back-arrow">
            <FontAwesomeIcon
              className="add-new-activity"
              icon={faAngleLeft}
              onClick={(result) => {
                props.onSubmit(result);
              }}
            />
          </div>
          <h3>Add New Activity</h3>
        </div>
      </div>
    </>
  );
}
export default UserActivityList;
