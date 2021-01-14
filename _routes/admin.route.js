var express = require('express')
var router = express.Router()


const controller = require('./../_controllers/admin.controller');


router.get('/infoTeacher', controller.getAllTeacher)

router.get('/infoMentor', controller.getAllMentor)

router.get('/infoTeacher/:idGV', controller.getInfoTeacher)
router.get('/infoMentor/:idNV', controller.getInfoMentor)
router.get('/getAllStudentConfirm/:idGV', controller.getAllStudentConfirm)

router.get('/getAllStudentWaitingAddMission/:idGV', controller.getAllStudentWaitingAddMission)
router.get('/getDetailStudentWaitingAddMission/:idSV', controller.getDetailStudentWaitingAddMission)


router.get('/getListTodoListByTeach/:idGV', controller.getListTodoListByTeach)

router.post('/addTopic', controller.addTopic)
router.post('/confirmTopicRegister', controller.confirmTopicRegister)
router.post('/createMission', controller.createMission)
router.post('/addMission', controller.addMission)

router.get('/insertFileData', controller.insertFileData)


router.patch('/comfirmRegisterTopic/:idGV', controller.comfirmRegisterTopic)

module.exports = router