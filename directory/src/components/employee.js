import React from "react";



function EmployeeCard(props) {
    return (
        
        <div class="col-4">
            <div class="card m-5" >
                {/* <img src={props.image} class="card-img-top" alt="imh"/> */}
                <div class="card-body">
                    <h5 class="card-title">Item: {props.name}</h5>
                    <p class="card-text">Price: ${props.price}</p>
                    <p class="card-text">Seller: {props.seller}</p>
                    <p class="card-text">Posted: {props.birth}</p>
                </div>
            </div>
        </div>
    );
}

export default EmployeeCard;