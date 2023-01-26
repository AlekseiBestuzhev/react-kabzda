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
            <Block title={'Episode One'} rate={4}/>
            <Accordion/>
            <Block title={'Episode Two'} rate={3}/>
            <Accordion/>
        </div>
    );
}


export default App;
