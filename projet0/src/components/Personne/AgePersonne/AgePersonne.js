import React from "react";

const agePersonne = (props) => {
    let now = new Date().getFullYear();
    
    return <div>{props.age} - ({now - props.age}) </div>

}

export default agePersonne;