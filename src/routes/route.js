const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');
const aboutController = require('../controllers/aboutController');
const footerController = require('../controllers/footerController');


// Hero Routes
router.get('/hero', heroController.getAllHero);
router.get('/hero/:id', heroController.getHeroById);
router.patch('/hero/:id', heroController.updateHero);

// AboutUs Routes
router.get('/about', aboutController.getAllAboutUs);
router.get('/about/:id', aboutController.getAboutById);
router.patch('/about/:id', aboutController.updateAbout);

// Footer Routes
router.get('/footer', footerController.getFooter);
router.patch('/footer', footerController.updateFooter);


module.exports = router;
