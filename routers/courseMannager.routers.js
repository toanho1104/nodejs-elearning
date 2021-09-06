const express = require('express')
const { Courses } = require('../models')
const { getListCourses, getDetailCourse, createCourse, deleteCourse, updateCourse } = require('../controllers/courseMangager.controlers')
const { authenticate, authorize } = require('../middlewares/auth/verifyToken.midlewares')
const { logFeature } = require('../middlewares/log/logFeature.middlewares')
const { checkAccountExist } = require('../middlewares/validations/cheackExistl.middlewares')

const courseMannagerRouter = express.Router()

courseMannagerRouter.get('/', logFeature('lay danh sach khoa hoc'), authenticate, authorize(['admin']), getListCourses)
courseMannagerRouter.get('/:id', logFeature('lay chi tiet khao hoc'), authenticate, authorize(['admin']), getDetailCourse)
courseMannagerRouter.post('/', logFeature('tao khoa hoc moi'), authenticate, authorize(['admin']), createCourse)
courseMannagerRouter.delete('/:id', logFeature('xoa khoa hoc'), authenticate, authorize(['admin']), checkAccountExist(Courses), deleteCourse)
courseMannagerRouter.put('/:id', logFeature('cap nhat thong tin khoa hoc'), authenticate, authorize(['admin']), checkAccountExist(Courses), updateCourse)

module.exports = {
  courseMannagerRouter
}