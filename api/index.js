const express = require('express');
const cors = require('cors');
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/pet/findBystatus', (req, res) => {
  
    res.status(200).send({
        msg: "Finds pets by status",
        
    });
});

//pet

app.get('/pet/:petId', (req, res) => {
    const { petId } = req.params;
    res.status(200).send({
        msg: "Find pet by ID",
        petId
    });
});

app.post('/pet/:petId/uploadImage', (req, res) => {
    const { petId } = req.params;
    res.status(201).send({
        msg: "Uploads an image ",
        petId
    });
});

app.post('/pet', (req, res) => {
    
    res.status(201).send({
        msg: "Add a new pet to the store",
        
    });
});

app.post('/pet/:petId', (req, res) => {
    const { petId } = req.params;
    res.status(201).send({
        msg: "Updates a pet in the store with form data",
        petId
    });
});



app.put('/pet', (req, res) => {
   
    res.status(200).send({
        msg: "Update an existing pet",
       
    });
});

app.patch('/user', (req, res) => {
    
    res.status(200).send({
        msg: "Server received PATCH request on /user",
      
    });
});

app.delete('/user', (req, res) => {
    
    res.status(200).send({
        msg: "Server received DELETE request on /user",
       
    });
});

app.delete('/pet/:petId', (req, res) => {
    const { petId } = req.params;
    res.status(200).send({
        msg: "Deletes a pet",
        petId
    });
});

//store
app.post('/store/order', (req, res) => {
  
    res.status(201).send({
        msg: "Place an order for a pet",
      
    });
});


app.get('/store/order/:orderId', (req, res) => {
    const { orderId } = req.params;
    res.status(200).send({
        msg: "Get user by name ",
        orderId
    });
});

app.get('/store/inventory', (req, res) => {
   
    res.status(200).send({
        msg: "Returns pet inventories by status ",
      
    });
});

app.delete('/store/order/:orderId', (req, res) => {
    const { orderId } = req.params;
    res.status(200).send({
        msg: "Delete purchase order by ID",
        orderId
    });
});



app.post('/user/createWithArray', (req, res) => {
   
    res.status(201).send({
        msg: "Creates list of user with given input array",
       
    });
});

app.post('/user/createWithList', (req, res) => {
   
    res.status(201).send({
        msg: "Creates list of users with given input array",
      
    });
});

app.get('/user/:username', (req, res) => {
    const { username } = req.params;
    res.status(200).send({
        msg: "Get user by name ",
        username
    });
});

app.put('/user/:username', (req, res) => {
    const { username } = req.params;
    res.status(200).send({
        msg: "Updated user",
        username
    });
});

app.delete('/user/:username', (req, res) => {
    const { username } = req.params;
    res.status(200).send({
        msg: "Delete user",
        username
    });
});

app.get('/user/login', (req, res) => { 
    res.status(200).send({
        msg: " Logs user int the system ",
      
    });
});

app.get('/user/login', (req, res) => {
  
    res.status(200).send({
        msg: "Logs out current logged in user session",
   
    });
});

app.post('/user', (req, res) => {
    res.status(201).send({
        msg: "Create user ",
        
    });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
