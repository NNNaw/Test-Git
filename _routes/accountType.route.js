var express = require('express')
var router = express.Router()


const controller = require('./../_controllers/accountType.controller');


router.get('/', controller.GetAllAccountTypes)
router.post('/createAccountType', controller.CreateAccountType)

module.exports = router