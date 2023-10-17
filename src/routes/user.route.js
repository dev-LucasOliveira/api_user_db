const route = require('express').Router();
const userController = require('../controllers/user.controller');

// Register a new user (sign up)
route.post("/", userController.create);

// Get all users
route.get("/", userController.findAll);

// Get a user by id
route.get("/:id", userController.findById);

module.exports = route;