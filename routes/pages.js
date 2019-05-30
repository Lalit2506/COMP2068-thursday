const router = require('express').Router();

//create our routes
const pagesController = require('../controllers/pagesController');

//Create our route
router.get('/', pagesController.show);
router.get('/about', pagesController.show);
router.get('/contact', pagesController.show);

  module.exports = router;