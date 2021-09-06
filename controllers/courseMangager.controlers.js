const { results } = require('../config')
const { Courses, CourseContents, Videos, sequelize } = require('../models')

const getListCourses = async (req, res) => {
  try {
    const [courseList] = await sequelize.query(`
      SELECT c.id, c.name,c.title,c.poster,c.video,c.rating,c.numberOfRating,a.fullName as authorName, a.avatar authorAvatar, c.updatedAt,c.createdAt FROM Courses as c
      INNER JOIN Authors as a
      ON c.authorID= a.id
      `)
    res.status(200).send(results(true, undefined, { data: courseList }))
  } catch (error) {
    res.status(500).send(error)
  }
}

const getDetailCourse = async (req, res) => {
  const { id } = req.params
  const courseListContent = []
  try {
    const [courseDetail] = await sequelize.query(`
    SELECT c.id, c.name,c.title,c.poster,c.video,c.rating,c.numberOfRating,a.fullName as authorName, a.avatar authorAvatar,cd.content, c.updatedAt,c.createdAt FROM Courses as c
      LEFT JOIN Authors as a
      ON c.authorID= a.id
      LEFT JOIN CourseDescriptions as cd
      ON c.id=cd.id
      WHERE c.id=${id}
    `)
    const courseContent = await CourseContents.findAll()
    for (let i of courseContent) {
      const videoList = await Videos.findAll({ where: { courseContentID: i.id } })
      const item = { contentDetail: i, videoList }
      courseListContent.push(item)
    }
    res.status(200).send(results(true, undefined,
      {
        courseInfo: courseDetail,
        courseContent: courseListContent,
      }))
  } catch (error) {
    res.status(500).send(error)
  }
}

const createCourse = async (req, res) => {
  const { name, title, poster, video, categoriesID, authorID } = req.body
  try {
    const newCourse = await Courses.create({ name, title, poster, video, rating: 0, numberOfRating: 1, categoriesID, authorID })
    const [courseDetail] = await sequelize.query(`
      SELECT c.id, c.name,c.title,c.poster,c.video,c.rating,c.numberOfRating,a.fullName as authorName, a.avatar authorAvatar,cd.content, c.updatedAt,c.createdAt FROM Courses as c
      LEFT JOIN Authors as a
      ON c.authorID= a.id
      LEFT JOIN CourseDescriptions as cd
      ON c.id=cd.id
      WHERE c.id=${newCourse.id}
    `)
    res.send(results(true, undefined, courseDetail[0]))
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    try {
      await Courses.destroy({
        where: {
          id,
        },
      });
      res.status(200).send(results(true, 'delete course successfully'));
    } catch (error) {
      res.status(500).send(error);
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateCourse = async (req, res) => {
  const { id } = req.params
  const { name, title, poster, video, categoriesID, authorID } = req.body
  try {
    const newCourse = await Courses.update(
      { name, title, poster, video, categoriesID, authorID },
      { where: { id } }
    )
    const [courseDetail] = await sequelize.query(`
      SELECT c.id, c.name,c.title,c.poster,c.video,c.rating,c.numberOfRating,a.fullName as authorName, a.avatar authorAvatar,cd.content, c.updatedAt,c.createdAt FROM Courses as c
      LEFT JOIN Authors as a
      ON c.authorID= a.id
      LEFT JOIN CourseDescriptions as cd
      ON c.id=cd.id
      WHERE c.id=${id}
    `)
    res.send(results(true, undefined, courseDetail[0]))
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  getListCourses,
  getDetailCourse,
  createCourse,
  deleteCourse,
  updateCourse,
}