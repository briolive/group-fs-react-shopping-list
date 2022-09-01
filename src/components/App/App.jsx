import React from 'react';
import {useEffect, useState} from 'react'; // Destructuring
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';



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
        axios({
            method: 'POST',
            url: '/items',
            data: {
                name: itemName,
                quantity: itemQuantity,
                unit: itemUnit,
            }
        }).then(response => {
            // clear form inputs
            setItemName('');
            setItemQuantity('');
            setItemUnit('');
            // fetch items from the server
            fetchItems();
        }).catch(error => {
            console.log(error);
            alert('Something went wrong in POST!');
        });
    };

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
            <button onClick={addItem}>Add Grocery Item</button>
            </form>
                <br />
                <br />
                <Grid container spacing={2}>
                {itemList.map((item) => {
                    return  <Grid item xs={12} sm={6} md={4} key={item.id}>
                                {item.name} / {item.quantity} {item.unit}
                                <IconButton color="primary">
                                    <AddShoppingCartIcon />
                                </IconButton>
                                {/* <Button size="small" variant="outlined" color="primary">Purchased</Button> */}
                            </Grid>
                
                })  
}
</Grid>
            </main>
        </div>
    );
}

export default App;
