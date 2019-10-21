var express = require('express');
var router = express.Router();


// Require our controllers.
var testPaper = require('../controllers/testPaper'); 


router.get('/test/testPaper', testPaper.getTestPaper);

// router.post('/book/create', book_controller.book_create_post);


module.exports = router;