import React from "react";

type BlockPropsType = {
    title: string
    rate: number
}

function Block(props: BlockPropsType) {
    if (props.rate === 1) {
        return (
            <div>
                <h3>{props.title}</h3>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    } else if (props.rate === 2) {
        return (
            <div>
                <h3>{props.title}</h3>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    } else if (props.rate === 3) {
        return (
            <div>
                <h3>{props.title}</h3>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    } else if (props.rate === 4) {
        return (
            <div>
                <h3>{props.title}</h3>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        )
    } else if (props.rate === 5) {
        return (
            <div>
                <h3>{props.title}</h3>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}
function Star(props: StarPropsType) {
    if (props.selected) return <span><b>Star</b> </span>
    return <span>Star </span>
}

export default Block;