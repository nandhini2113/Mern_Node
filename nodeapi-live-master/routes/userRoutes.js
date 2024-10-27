const express = require("express");
const { getAllUsers, createUser, updateUser, deleteUserById, getUserById, login } = require("../controllers/usersController");
const { verifyToken } = require("../validators/validators");

const router = express.Router();



router.get("/:name",getUserById)
router.post("/singup",createUser)
router.put("/:id",updateUser)
router.delete("/:email",deleteUserById)
router.get("/", verifyToken,getAllUsers)
router.post("/login",login)


module.exports = router;