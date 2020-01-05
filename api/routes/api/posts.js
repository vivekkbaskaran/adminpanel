const express = require("express");
const router = express.Router();

router.get("/test", () => console.log("working"));

module.exports = router;
