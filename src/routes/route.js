// routes/routes.js
const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Define routes and link them to controller functions
router.post('/examples', exampleController.createExample);
router.get('/examples', exampleController.getAllExamples);
router.get('/examples/:id', exampleController.getExampleById);
router.put('/examples/:id', exampleController.updateExample);
router.delete('/examples/:id', exampleController.deleteExample);

module.exports = router;
