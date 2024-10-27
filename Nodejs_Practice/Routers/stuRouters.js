const express = require("express");
const { getAllStudents, createStudent, updateStudent, deleteStudentById, getStudentById, login } = require("../Controllers/stuControllers");
const router = express.Router();

router.get("",getAllStudents);
router.post("/signup",createStudent);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudentById);
router.get("/:name",getStudentById);
router.post("/login",login)

module.exports = router;