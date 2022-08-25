import React from 'react';
import {useEffect, useState} from 'react'; // Destructuring
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';



function App() {

    const [itemList, setItemList] = useState([]);

    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemUnit, setItemUnit] = useState('');

    // Called when page loads
    useEffect(() => {
        console.log('useEffect - page load');
        fetchItems();
    }, []);
    
    // Make a GET request to our server
    const fetchItems = () => {
        axios({
          method: 'GET',
          url: '/items',
        }).then(response => {
      // our array is response.data
      setItemList(response.data);
        }).catch(error => {
      console.log(error)
      alert('something went wrong')
        });
      }

    const addItem = (event) => {
        event.preventDefault();
    }

    return (
        <div className="App">
            <Header/>
            <main>
            <br/>
            <form onSubmit={addItem}>
            <TextField 
                id="item" 
                size="small" 
                required 
                label="Item" 
                variant="outlined"
                value={itemName}
                onChange={(event) => setItemName(event.target.value)}
                />
            <br />
            <br />
            <TextField 
                id="quantity" 
                size="small" 
                required 
                label="Quantity" 
                variant="outlined"
                value={itemQuantity}
                onChange={(event) => setItemQuantity(event.target.value)}
                />
            <br />
            <br />
            <TextField 
                id="unit" 
                size="small" 
                required 
                label="Unit" 
                variant="outlined"
                value={itemUnit}
                onChange={(event) => setItemUnit(event.target.value)}
                />
            <br />
            <br />
            <button>Add Grocery Item</button>
            </form>
                <br />
                <br />
                <Grid container spacing={2}>
            {itemList.map((item) => {  return <li key={item.id}>
 {item.name} / {item.quantity} {item.unit}
  </li>
  })  
}
</Grid>
            </main>
        </div>
    );
}

export default App;
