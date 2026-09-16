const express = require('express');
const blogRouter = express.Router();
const blogController = require('../controllers/blogController.js');
require('../config/passport.js');
const passport = require('passport');


blogRouter.get('/', passport.authenticate("jwt", { session: false}), blogController.allPostsGet);
blogRouter.post('/createPost', passport.authenticate("jwt", { session: false}), blogController.createPost);

blogRouter.get('/creator', passport.authenticate("jwt", { session: false}), blogController.getAuthorPosts);

blogRouter.get('/publishPost/:postId', passport.authenticate("jwt", { session: false}), blogController.publishPostPut);
blogRouter.get('/:postId', passport.authenticate("jwt", { session: false}), blogController.findPostGet);

blogRouter.post('/:postId/createComment', passport.authenticate("jwt", { session: false }), blogController.createCommentPost);
blogRouter.get('/:postId/:commentId', passport.authenticate("jwt", { session: false}), blogController.findCommentGet);



module.exports = blogRouter;
