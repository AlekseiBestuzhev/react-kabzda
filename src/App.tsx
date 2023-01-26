import React from 'react';
import './App.css';
import Block from "./components/Block";
import Accordion from "./components/Accordion";

function App() {
    return (
        <div className="App">
            <h1>React App</h1>
            <p>This is some text witch rendered by react</p>
            <Block/>
            <Accordion/>
        </div>
    );
}


export default App;
