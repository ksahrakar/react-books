const router = require("express").Router();
const bookCont = require("../../controllers/bookCont");

// Matches with "/api/saved"
router.route("/")
  .get(bookCont.findAll)
  .post(bookCont.create);

// "/api/saved/:id"
router.route("/:id")
  .delete(bookCont.remove);

module.exports = router;