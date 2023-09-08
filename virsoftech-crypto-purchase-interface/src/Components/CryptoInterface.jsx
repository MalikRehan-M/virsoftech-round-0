import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CryptoStorefront = () => {
  const [cryptocurrencies,setCryptocurrencies] = useState([
    { id: 1, name: 'Bitcoin', price: 40000, quantity: 0 },
    { id: 2, name: 'Ethereum', price: 2800, quantity: 0 },
    { id: 3, name: 'Litecoin', price: 150, quantity: 0 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (crypto, quantity) => {
    if (quantity > 0) {
      const existingItem = cart.find((item) => item.crypto.id === crypto.id);
      if (existingItem) {   
        existingItem.quantity += quantity;
        setCart([...cart]);
      } else {
        setCart([...cart, { crypto, quantity }]);
      }
    } else {
      alert('Please enter a valid quantity.');
    }
  };

  const removeFromCart = (crypto) => {
    const updatedCart = cart.filter((item) => item.crypto.id !== crypto.id);
    setCart(updatedCart);
  };

  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + item.crypto.price * item.quantity, 0);
  };


  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom mt={10}>
        Crypto Purchase Interface
      </Typography>
    <Container sx={{display:'flex',width:'70%',margin:"auto",mt:5,justifyContent:"space-between"}}>
      <Grid container spacing={3} sx={{width:"480px",borderRadius:"12px"}}>
        {cryptocurrencies.map((crypto) => (
          <Grid item xs={12}  key={crypto.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{fontWeight:"600"}}>{crypto.name}</Typography>
                <Typography variant="subtitle1">Price: ${crypto.price.toFixed(2)}</Typography>
                <TextField
                  type="number"
                  label="Quantity"
                  variant="outlined"
                  
                  onChange={(e) => {
                    crypto.quantity = parseInt(e.target.value);
                  }}
                />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  
                  onClick={() => addToCart(crypto, crypto.quantity)}
                >
                  Buy
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ boxShadow: 1,width:"400px" }}>
        <Typography variant="h5" gutterBottom>
          Your Cart
        </Typography>
        {cart.length === 0 ? (
          <Typography variant="body1">Your cart is empty!</Typography>
        ) : (
          <List>
            {cart.map((item) => (
              <ListItem key={item.crypto.id}>
                <ListItemText
                  primary={`${item.crypto.name} - Quantity: ${item.quantity}`}
                  secondary={`Total: $${(item.crypto.price * item.quantity).toFixed(2)}`}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => removeFromCart(item.crypto)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
        <Typography variant="h6">
          Total Cost: ${calculateTotalCost().toFixed(2)}
        </Typography>
      </Box>
    </Container>
    </>
  );
};

export default CryptoStorefront;
