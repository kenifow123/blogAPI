const { prisma } = require("../lib/prisma");

const allPostsGet = async (req, res) => {
    const posts = await prisma.post.findMany();
    res.json(posts);
}

const createPost = async (req, res) => {
    await prisma.post.create({
        data: {
            title: req.body.title,
            content: req.body.content,
            authorId: req.user.id,
            published: true
        }
    })
    res.json({message : "Post successfully created"})
}

const findPostGet = async (req, res) => {
    console.log('findPostGet');
    const post = await prisma.post.findUnique({
        where: {
            id: Number(req.params.postId),
        },
        include: {
            comments: {
                include: {
                    author: true
                }
            }
        }
    })
    res.json(post);
}

const createCommentPost = async (req, res) => {
    await prisma.comment.create({
        data: {
            content: req.body.content,
            authorId: req.user.id,
            postId: Number(req.params.postId),
        }
    });

    res.json('comment successfully created');
}

const findCommentGet = async (req, res) => {
    const comment = await prisma.comment.findUnique({
        where: {
            id: Number(req.params.commentId),
        }
    })

    res.json(comment);
}

const savePostDraftPost = async (req, res) => {
    await prisma.post.create({
        data: {
            title: req.body.title,
            content: req.body.content,
            authorId: req.user.id,
        }
    })
    res.json({message : "Draft successfully saved"})
}

const getAuthorPosts = async (req, res) => {

    const response = await prisma.post.findMany({
        where: {
            authorId: req.user.id
        }
    })
    res.json(response);
}

const publishPostPut= async (req, res) => {
    const response = await prisma.post.update({
        where: {
            id: Number(req.params.postId),
        },
        data: {
            published: true
        }
    })
    res.json("Post published successfully");
}
module.exports = {
    allPostsGet,
    createPost,
    findPostGet,
    createCommentPost,
    findCommentGet,
    getAuthorPosts,
    publishPostPut,
}