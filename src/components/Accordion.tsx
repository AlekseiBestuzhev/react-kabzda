import React from "react";

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
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

function AccordionBody() {
    return (
        <ul>
            <li>Messages</li>
            <li>Friends</li>
            <li>Groups</li>
            <li>Music</li>
        </ul>
    )
}


export default Accordion;