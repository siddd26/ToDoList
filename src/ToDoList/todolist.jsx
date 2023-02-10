import React from "react";

const ToDoLists = (props) => {
  // console.log(props.text);

  return (
    <>
      <div className="t-item">
        <i
          className="fa fa-times icon-red"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default ToDoLists;
