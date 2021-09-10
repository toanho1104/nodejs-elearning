const express = require('express')
const { CourseContents } = require('../models')
const { authenticate, authorize } = require('../middlewares/auth/verifyToken.midlewares')
const { logFeature } = require('../middlewares/log/logFeature.middlewares')
const { checkExist, checkEmailExists } = require('../middlewares/validations/cheackExistl.middlewares')
const { createCourseContent, deleteCourseContent, updateCourseContent } = require('../controllers/courseContentMangager.controllers')
const courseContentManagerRouter = express.Router()

courseContentManagerRouter.post('/', logFeature('them noi dung moi'), authenticate, authorize(['admin']), createCourseContent)
courseContentManagerRouter.put('/:id', logFeature('cap nhat noi dung moi'), authenticate, authorize(['admin']), checkExist(CourseContents), updateCourseContent)
courseContentManagerRouter.delete('/:id', logFeature('xoa noi dung'), authenticate, authorize(['admin']), checkExist(CourseContents), deleteCourseContent)


module.exports = {
  courseContentManagerRouter
}