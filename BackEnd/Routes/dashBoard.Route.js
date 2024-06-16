const express = require('express');
const { getDashboardStats } = require('../Controllers/Dashboard.Controller');

const router = express.Router();

router.get('/dashboard', getDashboardStats);

module.exports = router; 