import React, { useState } from "react";
import ToDoLists from "./todolist";

const Todo = () => {
  const [inputEvent, setInputEvent] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputEvent(event.target.value);
  };

  const listOfItems = () => {
    setItems((prvItem) => {
      return [...prvItem, inputEvent];
    });
  };

  const deleteItem = (id) => {
    console.log("deleted");
    setItems((prvItem) => {
      return prvItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="t-container">
        <h1>ToDo List</h1>
        <div className="t-head">
          <input
            name="item"
            placeholder="Enter the Item name"
            onChange={itemEvent}
          />
          <button className="icon-green" onClick={listOfItems}>
            +
          </button>
        </div>
        <div className="content">
          <ol className="t-ol">
            {/* <li>{item}</li> */}
            {items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;
