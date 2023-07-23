var express = require('express');
var router = express.Router();
const adminController=require('../Controllers/adminController')



/* GET home page. */

router.get('/getAllusers',adminController.getAllusers)

router.post('/login',adminController.postLogin)

module.exports = router;
