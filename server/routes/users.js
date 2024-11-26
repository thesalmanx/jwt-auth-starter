const mongoose = require("mongoose");
const router = require("express").Router();
const User = mongoose.model("User");
const Todo = mongoose.model("Todo");
const utils = require("../lib/utils");

router.get("/protected", utils.authMiddleware, (req, res, next) => {
  // Access username from the decoded token
  const username = req.jwt.username; // Now this will exist
  res.status(200).json({
    success: true,
    msg: "You are successfully authenticated to this route!",
    user: username, // Include user data in the response
  });
});

// Validate an existing user and issue a JWT
router.post("/login", function (req, res, next) {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ success: false, msg: "could not find user" });
      }

      const isValid = utils.validPassword(
        req.body.password,
        user.hash,
        user.salt
      );
      if (isValid) {
        const tokenObject = utils.issueJWT(user);
        res.status(200).json({
          success: true,
          user: tokenObject.user,
          token: tokenObject.token,
          expiresIn: tokenObject.expires,
        });
      } else {
        return res
          .status(401)
          .json({ success: false, msg: "you entered the wrong password" });
      }
    })
    .catch((err) => {
      next(err);
    });
});

// Register a new user
router.post("/register", function (req, res, next) {
  const saltHash = utils.genPassword(req.body.password);

  console.log("username is: ", req.body.username);
  console.log("password is: ", req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username: req.body.username,
    hash: hash,
    salt: salt,
  });

  try {
    newUser.save().then((user) => {
      res.json({ success: true, user: user });
    });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
});

module.exports = router;