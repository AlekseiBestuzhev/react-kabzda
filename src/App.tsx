import React from 'react';
import './App.css';
import Block from "./components/Block";
import Accordion from "./components/Accordion";

function App() {
    return (
        <div className="App">
            <div className={'center-title'}>
                <h1>React App</h1>
                <p>This is some text witch rendered by react</p>
            </div>
            <Block/>
            <Accordion/>
            <Block/>
            <Accordion/>
        </div>
    );
}


export default App;
