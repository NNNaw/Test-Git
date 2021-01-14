var express = require('express')
var router = express.Router()


const controller = require('./../_controllers/account.controller');


router.get('/', controller.getAccounts)



router.post('/register', controller.Register);
// router.post('/registerEmployee', controller.RegisterEmployee);

router.post('/login', controller.Login);

module.exports = router