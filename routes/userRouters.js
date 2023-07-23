var express = require('express');
var router = express.Router();
const userController=require('../Controllers/userController')


/* GET users listing. */
router.post('/signup',userController.signup)

router.post('/login',userController.login)

router.get('/getUserDetails/:id',userController.userDetails)



//GET ALL USERS
router.get('/getUsers',userController.getAllUsers)

//GET SPECIFIC USER
router.get('/getUser/:id',userController.getUser)

//UPDATE USER
router.post('/updateUser/:id',userController.updateUser)

//REMOVE USER
router.get('/removeUser/:id',userController.removeUser)

module.exports = router;
