const express  = require("express");
const router = express.Router();
const {
  register,
  login,
  forgotPassword,
  resetpassword,
} = require("../controllers/auth");


router.post("/register", register);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetpassword);


module.exports = router;