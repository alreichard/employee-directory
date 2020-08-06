import React from "react";


function NumButton(props) {
  return (
   
      <button onClick={props.sortNumber} className = "m-1">
        By price
      </button>
    
  );
}

export default NumButton;
