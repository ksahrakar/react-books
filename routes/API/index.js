const router = require("express").Router();
const bookRts = require("./bookrtr");

router.use("/bookrtr",bookRts);

module.exports=router;