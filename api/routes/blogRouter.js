const express = require('express');
const blogRouter = express.Router();


blogRouter.get('/', blogController.allPostsGet);
blogRouter.get('/:postId', blogController.findPostGet);
blogRouter.get('/:postId/:commentId', blogController.findCommentGet);

module.exports = blogRouter;
