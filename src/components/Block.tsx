import React from "react";

type BlockPropsType = {
    title: string
}

function Block(props: BlockPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
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