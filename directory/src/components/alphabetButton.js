import React from "react";


function AlphaButton(props) {
  return (
   
      <button onClick={props.sortName} className = "m-1">
        Alphabetical
      </button>
    
  );
}

export default AlphaButton;
