'use strict';
const express = require('express');
const router = express.Router();

const {body, validationResult} = require('express-validator');



// Register new User
router.post(); // /user/new_user/
// Get current user by Id
router.get(); // /user/current/:id
// Delete user by Id
router.delete(); // /user/delete/:id
// Update user email by Id
router.put(); // /user/update/:id/:email
// Update user pass by Id
router.put(); // /user/update/:id/:password

module.exports = router;