const express = require('express');
const blogRouter = express.Router();
const blogController = require('../controllers/blogController.js');
const passport = require('passport');


blogRouter.get('/', blogController.allPostsGet);
blogRouter.post('/createPost', passport.authenticate("jwt", { session: false}), blogController.createPost);
// blogRouter.get('/:postId', blogController.findPostGet);
// blogRouter.get('/:postId/:commentId', blogController.findCommentGet);

module.exports = blogRouter;
