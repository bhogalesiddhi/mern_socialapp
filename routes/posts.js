const express = require("express");
const { createPost, updatePost, deletePost, likePost, getPost, getAllPost } = require("../controller/postController");
const router = express.Router();

router.route("/").post(createPost);
router.route("/:id").put(updatePost).delete(deletePost).get(getPost);
router.route("/:id/like").put(likePost);
router.route("/timeline/:userId").get(getAllPost);

module.exports=router;