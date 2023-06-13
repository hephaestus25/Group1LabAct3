import React from "react";

export default function Haircut(props) {
    return (
        <div className='card'>
            <img className="haircut--image"
            src={props.url} 
            alt="Haircut"> 
            </img>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>
              <button>Book Now</button>
            </p>
         </div>
    )
}