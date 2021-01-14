var express = require('express')
var router = express.Router()


const controller = require('./../_controllers/topic.controller');


router.get('/', controller.getTopics)
router.get('/:idDeTai', controller.getDetailTopic)

router.get('/getTopicByIdStudent/:idSV', controller.getTopicByIdStudent)
router.get('/getAllTopicByIdTeacher/:idGV', controller.getAllTopicByIdTeacher)

router.patch('/changeStatus/:idDeTai', controller.changeStatusTopic)

router.post('/createTopic', controller.createTopic)

module.exports = router