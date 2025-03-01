import React from "react";

const Card = (props) =>{
    return (
        <span className="card">
            <div>
            <img src= {props.image} className="logo"></img>
            </div>
            <h3>{props.language_name}</h3>
            <p>{props.description}</p>
            <a href = {props.link}><button>Read More</button></a>
        </span>
    )
}

export default Card;


