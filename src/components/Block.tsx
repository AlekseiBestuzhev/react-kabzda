import React from "react";

function Block() {
    return (
        <div>
            <h3>Rating</h3>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return <span>Star </span>
}

export default Block;