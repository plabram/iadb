const express = require("express")
const { 
  getAllSites, 
  getSiteById,
  createSite,
  updateSiteById,
  deleteSite
} = require("../controllers/sites")
const {hasValidAuthJwt} = require("../middleware/auth")
const { addContextToSite, deleteContext } = require("../controllers/contexts")

const router = express.Router()
router.get("/", getAllSites)
router.get("/:id", getSiteById)
router.post("/", hasValidAuthJwt, createSite)
router.put("/:id", hasValidAuthJwt, updateSiteById)
router.put("/:id/contexts/", hasValidAuthJwt, addContextToSite)
router.delete("/:id", hasValidAuthJwt, deleteSite)
router.delete("/:siteid/contexts/:contextid", hasValidAuthJwt, deleteContext)


module.exports = router