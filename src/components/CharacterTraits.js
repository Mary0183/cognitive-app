import React from "react";

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};

const list = ["helpful", "friendly", "compassionate", "thoughtful"];

function CharacterTraits() {
  // We'll use the initialDndState created above

  const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState);

  // The initial state of "list"
  // is going to be the static "items" array
  const [list, setList] = React.useState(items);

  //...

  // So let's update our .map() to loop through
  // the "list" hook instead of the static "items"

  const onDragStart = (event) => {
    // We'll access the "data-position" attribute
    // of the current element dragged
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      // we spread the previous content
      // of the hook variable
      // so we don't override the properties
      // not being updated
      ...dragAndDrop,

      draggedFrom: initialPosition, // set the draggedFrom position
      isDragging: true,
      originalOrder: list, // store the current state of "list"
    });
  };

  const onDragOver = (event) => {
    event.preventDefault();

    // Store the content of the original list
    // in this variable that we'll update
    let newList = dragAndDrop.originalOrder;

    // index of the item being dragged
    const draggedFrom = dragAndDrop.draggedFrom;

    // index of the drop area being hovered
    const draggedTo = Number(event.currentTarget.dataset.position);

    // get the element that's at the position of "draggedFrom"
    const itemDragged = newList[draggedFrom];

    // filter out the item being dragged
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    // update the list
    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    // since this event fires many times
    // we check if the targets are actually
    // different:
    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,

        // save the updated list state
        // we will render this onDrop
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = () => {
    // we use the updater function
    // for the "list" hook
    setList(dragAndDrop.updatedOrder);

    // and reset the state of
    // the DnD
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  return (
    <>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              data-position={index}
              draggable="true"
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
            >
              <span>{item.number}</span>
              <p>{item.title}</p>
              <i class="fas fa-arrows-alt-v"></i>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CharacterTraits;
