import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>React App</h1>
            <p>This is some text witch rendered by react</p>
            <Block/>
        </div>
    );
}

function Block() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return (
        <div>
            Star
        </div>
    )
}

export default App;
