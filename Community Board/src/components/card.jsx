import React from "react";

const Card = (props) =>{
    return (
        <span>
            <img src= {props.image}></img>
            <h3>{props.language_name}</h3>
            <a href = {props.link}><button>Read More</button></a>
        </span>
    )
}

export default Card;





// import React from "react";

// const Event = (props) => {

//     const handleClick = () => {
//         window.open(props.link, "_blank");
//     }
//     return(


//         <td className="Event" style = {{backgroundColor: props.color, cursor: "pointer"}} onClick = {handleClick}>
//             <h5>{props.event}</h5>
//             <h6>{props.location}</h6>
            
//         </td>
//     )
// }

// export default Event;