const express = require('express');
const blogRouter = express.Router();
const blogController = require('../controllers/blogController.js');
require('../config/passport.js');
const passport = require('passport');


blogRouter.get('/', blogController.allPostsGet);
blogRouter.post('/createPost', passport.authenticate("jwt", { session: false}), blogController.createPost);
blogRouter.get('/:postId', blogController.findPostGet);

blogRouter.post('/:postId/createComment', passport.authenticate("jwt", { session: false }), blogController.createCommentPost);
blogRouter.get('/:postId/:commentId', blogController.findCommentGet);

module.exports = blogRouter;
