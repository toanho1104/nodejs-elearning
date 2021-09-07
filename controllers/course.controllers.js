const jwt = require("jsonwebtoken");
const { results, key } = require('../config')
const { Courses, CourseContents, Videos, sequelize } = require('../models')

const getListCourses = async (req, res) => {
  const token = req.header('token')
  console.log("token", token)
  try {
    if (token) {
      const { id } = jwt.verify(token, key);
      const [courseAllList] = await sequelize.query(`
        SELECT c.id, c.name,c.title,c.poster,c.video,c.rating,c.numberOfRating,a.fullName as authorName, a.avatar authorAvatar, c.updatedAt,c.createdAt FROM Courses as c
        INNER JOIN Authors as a
        ON c.authorID= a.id
      `)
      const [courseLearnList] = await sequelize.query(`
      SELECT c.id FROM Courses as c
      LEFT JOIN Accounts_Courses as a_c
      ON c.id=a_c.courseID 
      WHERE a_c.accountID  =${id}
      `)
      const values = courseLearnList.map((item) => item.id);
      const new_arr = courseAllList.filter(item => !values.includes(item.id));
      // for (let i of courseLearnList) {
      //   courseAllList.forEach((v, index) => {
      //     if (i.id === v.id) {
      //       // delete courseAllList[index]
      //       courseAllList.splice(index, 1)
      //       return
      //     }
      //   });
      // }

      res.status(200).send(results(true, undefined, { data: new_arr }))
    } else {
      const [courseList] = await sequelize.query(`
  SELECT c.id, c.name,c.title,c.poster,c.video,c.rating,c.numberOfRating,a.fullName as authorName, a.avatar authorAvatar, c.updatedAt,c.createdAt FROM Courses as c
  INNER JOIN Authors as a
  ON c.authorID= a.id
  `)
      res.status(200).send(results(true, undefined, { data: courseList }))
    }
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
    if (courseDetail[0]) {
      const courseContent = await CourseContents.findAll({ where: { courseID: id } })
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
    } else {
      res.status(404).send(results(false, `Id ${id} Not Found`));
    }
  } catch (error) {
    res.status(500).send(error)
  }
}


module.exports = {
  getListCourses,
  getDetailCourse,
}