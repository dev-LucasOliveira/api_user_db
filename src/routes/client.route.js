const route = require('express').Router();
const clientController = require('../controllers/client.controller');

// Register a new client
route.post("/", clientController.create);

// Get all clients
route.get("/", clientController.findAll);

// Get a client by name
route.get("/:name", clientController.find);

module.exports = route;