const express = require("express");
const { getAllUsers, updateUser, deleteUser, getUser, follow, unfollow } = require("../controller/userController");
const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/:id").put(updateUser).delete(deleteUser).get(getUser);
router.route("/:id/follow").put(follow);
router.route("/:id/unfollow").put(unfollow);

module.exports = router;