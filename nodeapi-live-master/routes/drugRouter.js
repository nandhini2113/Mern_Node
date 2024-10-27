const express = require("express");
const { getDrugByName, createDrug, updateDrug, deleteDrugById, getAllDrugs } = require("../controllers/drugsController");

const router = express.Router();



router.get("/:name",getDrugByName)
router.post("/",createDrug)
router.put("/:id",updateDrug)
router.delete("/:id",deleteDrugById)
router.get("/",getAllDrugs)


module.exports = router;