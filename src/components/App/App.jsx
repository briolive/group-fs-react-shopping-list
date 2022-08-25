import React from 'react';
import {useEffect, useState} from 'react'; // Destructuring
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
            <br/>
            <form onSubmit={addItem}>
                Item<input id="item" type="text"></input>
                <input id="quanity" type="text">Quantity</input>
                <input id="unit" type="text">Unit</input>
            </form>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
