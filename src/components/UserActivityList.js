import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

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
