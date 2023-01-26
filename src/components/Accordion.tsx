import React from "react";

type AccordionPropsType = {
    body: boolean
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody display={props.body}/>
        </div>
    )
}

function AccordionTitle() {
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}

type AccordionBodyPropsType = {
    display: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
    if (props.display) {
        return (
            <ul>
                <li>Messages</li>
                <li>Friends</li>
                <li>Groups</li>
                <li>Music</li>
            </ul>
        )
    }
    return <></>
}


export default Accordion;