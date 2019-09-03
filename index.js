// Imports
const express = require('express');
const server = express();
const Users = require("./data/db.js");
server.use(express.json());

// CRUD Endpoints
server.get('/api/users', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    }) 
    .catch(() => {
        res.status(500).json( {message: "Could not get user info"})
    })
})

// Port Listening
const port = 8000;
server.listen(port, () => console.log("Listening on 8000"))