import React from "react";


function Search(props) {
    return (
         <section className="cell">
              <input type="text" className=" m-1 form-control mr-sm-2" onChange={props.findEmployee} placeholder="Search" />
         </section>
    );
}

export default Search