const express = require("express");
const userController = require('../Controllers/User.Controller')
const router = new express.Router();


router.post('/signup', userController.userSignup);
router.post('/login', userController.userLogin);
router.post('/logout', userController.userLogout);

module.exports = router;