const express = require("express");
const formController = require('../Controllers/Form.Controller')
const router = new express.Router();


router.get('/fetch',formController.formFetch );
router.post('/submit',formController.formSubmit );
router.put('/update/:id', formController.formUpdate);
router.delete('/delete/:id', formController.formDelete);

module.exports = router; 