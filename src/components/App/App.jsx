import React from 'react';
import {useEffect, useState} from 'react'; // Destructuring
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemUnit, setItemUnit] = useState('');


    const addItem = (event) => {
        event.preventDefault();
    }

    return (
        <div className="App">
            <Header/>
            <main>
            <br/>
            <form onSubmit={addItem}>
                Item<input id="item" type="text"/>
               Quantity <input id="quanity" type="text"/>
               Unit <input id="unit" type="text"/>
            </form>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
