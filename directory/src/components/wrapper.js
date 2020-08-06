import React from "react";


function Wrapper(props) {
  return <nav class="navbar navbar-light bg-light">{props.children}</nav>;
}

export default Wrapper;