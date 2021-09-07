const express = require('express')
const { Courses } = require('../models')
const { getListCourses, getDetailCourse } = require('../controllers/course.controllers')
const { authenticate, authorize } = require('../middlewares/auth/verifyToken.midlewares')
const { logFeature } = require('../middlewares/log/logFeature.middlewares')
const { checkExist } = require('../middlewares/validations/cheackExistl.middlewares')

const courseRouter = express.Router()

courseRouter.get('/', logFeature('lay danh sach khoa hoc'), getListCourses)
courseRouter.get('/:id', logFeature('lay chi tiet khao hoc'), getDetailCourse)


module.exports = {
  courseRouter
}